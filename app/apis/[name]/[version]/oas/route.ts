import { ApiHubApiVersionSpecContents, PortalService } from "apigee-portal-module";

export async function GET(request: Request, { params }: { params: Promise<{name: string, version: string} >}) {
  const { name, version } = await params;
  console.log(name, version);
  const portalService = new PortalService("apigee-hub-demo", "europe-west1");

  const apigeeApiVersionSpecResult = await portalService.getApiVersionSpecContents(name, version, version);
  let apiSpecText = "";
  if (apigeeApiVersionSpecResult[0]) {
    const apiVersionSpecContents: ApiHubApiVersionSpecContents = apigeeApiVersionSpecResult[0];
    apiSpecText = atob(apiVersionSpecContents.contents);
  } else {
    console.log("Apigee get API version spec error: " + JSON.stringify(apigeeApiVersionSpecResult[1]));
  }

  return Response.json(JSON.parse(apiSpecText));
}