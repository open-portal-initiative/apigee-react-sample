import { PortalService } from "apigee-portal-module";
import { AuroraText } from "@/components/magicui/aurora-text";
import { type ApiHubApi } from "apigee-portal-module";

import Header from "@/components/header"
import ApiProductCard from "@/components/apiProductCard";

export default async function APIs() {
  const portalService = new PortalService("apigee-hub-demo", "europe-west1");

  let newProducts: ApiHubApi[] = [];
  const apigeeProductsResult = await portalService.getApis("target_user.enum_values.values.display_name:Public");
  if (apigeeProductsResult[0]) {
    console.log(apigeeProductsResult[0]);
    newProducts = apigeeProductsResult[0].apis;
  } else {
    console.log("Apigee get products error: " + JSON.stringify(apigeeProductsResult[1]));
  }

  const getIdFromName = (name: string) => {
    let result = "";
    const pieces = name.split("/");
    if (pieces.length > 0) result = pieces[pieces.length - 1];
    return result;
  }

  const getLastVersion = (product: ApiHubApi) => {
    let result = "";
    if (product.versions && product.versions.length > 0) {
      const pieces = product.versions[product.versions.length - 1].split("/");
      if (pieces.length > 0) result = pieces[pieces.length - 1];
    }
    return result;
  }

  return (
    <div className="flex flex-col" style={{
      width: "100%"
    }}>
      <Header loggedIn={true} />

      <h1 className="mt-12 mb-12 flex flex-row justify-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
        Our latest <AuroraText className="ml-6"> APIs</AuroraText>
      </h1>
      
      <div className="flex flex-row flex-wrap justify-center gap-4 max-w-[1200px] mx-auto">
        {newProducts.map((product) => (
          <ApiProductCard title={product.displayName} description={product.description} key={product.name} link={"/apis/" + getIdFromName(product.name) + "/" + getLastVersion(product)} />
        ))}
      </div>

    </div>
  );
}