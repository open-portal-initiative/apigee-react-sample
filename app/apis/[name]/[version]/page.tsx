import { PortalService } from "apigee-portal-module";
import { AuroraText } from "@/components/magicui/aurora-text";
import Image from 'next/image'
import { type ApiHubApiVersion } from "apigee-portal-module";
import Header from "@/components/header";

export default async function ApiVersion({
  params,
}: {
  params: Promise<{ name: string, version: string }>;
}) {

  const { name, version } = await params;
  const specUrl = `/apis/${name}/${version}/oas`
  let explorerHtml = "";
  const portalService = new PortalService("apigee-hub-demo", "europe-west1");

  let apiVersionData: ApiHubApiVersion | undefined = undefined;

  const apigeeApiVersionResult = await portalService.getApiVersion(name, version);
  if (apigeeApiVersionResult[0]) {
    console.log(apigeeApiVersionResult[0]);
    apiVersionData = apigeeApiVersionResult[0];

    explorerHtml = `
    <openapi-explorer spec-url="${specUrl}" bg-color="#fff" nav-bg-color="#fafafa" primary-color="#36454F" secondary-color="#4285F4" text-color="#555" tree="true">
      <div slot="overview">
        <h1>${apiVersionData.displayName}</h1><br />
      </div>
    </openapi-explorer>
    `;

  } else {
    console.log("Apigee get API version error: " + JSON.stringify(apigeeApiVersionResult[1]));
  }

  return (
    <div className="flex flex-col" style={{
      width: "100%"
    }}>
      <Header loggedIn={true} />

      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            {/* <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1> */}
            <h1 className="mt-12 mb-12 flex flex-row justify-left text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
              {apiVersionData &&
                <AuroraText className="">{apiVersionData.displayName}</AuroraText>
              }
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{apiVersionData && apiVersionData.description}
            </p>
            <a className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#1d4ed8] hover:bg-[#1e40af] focus:ring-4 focus:ring-[#93c5fd] dark:focus:ring-[#1e3a8a]">
              Subscribe
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Speak to Sales
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex pt-[6px]">
            {/* <img className="rounded-md shadow-md" src={"https://picsum.photos/400/300"} alt="mockup" /> */}
            <Image
              src="https://picsum.photos/400/300"
              width={400}
              height={300}
              alt="Picture of the API"
            />
          </div>
        </div>
      </section>

      <h1 className="mt-12 mb-12 flex flex-row justify-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl pt-8">
        <AuroraText className="ml-6">Read the Docs</AuroraText>
      </h1>

      <div className="flex flex-row flex-wrap justify-center gap-4 max-w-[1200px] mx-auto">
        
        <span dangerouslySetInnerHTML={{ __html: explorerHtml }}></span>

      </div>

    </div>
  );
}