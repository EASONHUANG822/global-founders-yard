import { NextResponse } from "next/server";

type ApplicationPayload = {
  name?: string;
  email?: string;
  company?: string;
  building?: string;
  location?: string;
  stage?: string;
  needs?: string;
};

const stages = [
  "Idea / research",
  "Prototype",
  "Pilot customers",
  "Manufacturing-ready",
  "Scaling",
];

const requiredFields: Array<keyof ApplicationPayload> = [
  "name",
  "email",
  "company",
  "building",
  "location",
  "stage",
  "needs",
];

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || "Applications";

  if (!token || !baseId) {
    return NextResponse.json(
      { error: "Airtable is not configured yet." },
      { status: 500 },
    );
  }

  let payload: ApplicationPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid application payload." },
      { status: 400 },
    );
  }

  const application = {
    name: clean(payload.name),
    email: clean(payload.email),
    company: clean(payload.company),
    building: clean(payload.building),
    location: clean(payload.location),
    stage: clean(payload.stage),
    needs: clean(payload.needs),
  };

  const missingField = requiredFields.find((field) => !application[field]);

  if (missingField) {
    return NextResponse.json(
      { error: `Missing required field: ${missingField}` },
      { status: 400 },
    );
  }

  if (!stages.includes(application.stage)) {
    return NextResponse.json(
      { error: "Please select a valid startup stage." },
      { status: 400 },
    );
  }

  const response = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Name: application.name,
              Email: application.email,
              "Company / Team": application.company,
              "What are you building?": application.building,
              "Current location": application.location,
              Stage: application.stage,
              "What do you need help with in Shenzhen?": application.needs,
              Status: "New",
              "Submitted At": new Date().toISOString(),
            },
          },
        ],
        typecast: true,
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    const errorMessage =
      response.status === 401 || response.status === 403
        ? "Airtable rejected the request. Please check the token and its access scopes."
        : response.status === 404
          ? "Could not find the Airtable base or table. Please check AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME, and token access."
          : "Could not submit the application. Please check the Airtable table and field names.";

    return NextResponse.json(
      {
        error: errorMessage,
        detail: errorText,
      },
      { status: response.status },
    );
  }

  const data = await response.json();

  return NextResponse.json({
    ok: true,
    id: data.records?.[0]?.id,
  });
}
