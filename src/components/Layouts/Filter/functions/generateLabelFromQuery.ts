export default function generateLabelFromQuery(products: any[]) {
  const capitalize = (devider: string, queryStr: string): string =>
    queryStr
      .split(devider)
      .map((fr) => fr[0].toUpperCase() + fr.slice(1))
      .join(devider);

  const blackList = ["t-shirts"];

  function generateLabel(queryStr: string): string {
    let label;

    if (queryStr.includes("-and-")) {
      label = capitalize(" & ", queryStr.replaceAll("-and-", " & "));
    } else if (queryStr.includes("-") && !blackList.includes(queryStr)) {
      label = capitalize(" ", queryStr.replace("-", " "));
    } else {
      label = capitalize(" ", queryStr.replace(" ", " "));
    }

    return label;
  }

  products.map((product: any): string[] => {
    const newTypes = product.productType.map((type: string): string => {
      return generateLabel(type);
    });
    // console.log(newTypes);
    return newTypes;
  });
}
