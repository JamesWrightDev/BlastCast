import parser from "fast-xml-parser";
var options = {
  attributeNamePrefix: "@_",
  attrNodeName: "attr", //default is 'false'
  textNodeName: "#text",
  ignoreAttributes: true,
  ignoreNameSpace: false,
  allowBooleanAttributes: false,
  parseNodeValue: true,
  parseAttributeValue: false,
  trimValues: true,
  cdataTagName: "__cdata", //default is 'false'
  cdataPositionChar: "\\c",
  parseTrueNumberOnly: false,
  arrayMode: false, //"strict"
  attrValueProcessor: (val, attrName) =>
    he.decode(val, { isAttributeValue: true }), //default is a=>a
  tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
  stopNodes: ["parse-me-as-string"],
};

const parseFeed = async (feed: string) => {
  try {
    const result = await fetch(feed);
    const response = await result.text();
    const parsedXML = parser.getTraversalObj(response);
    const object = parser.convertToJson(parsedXML, options);

    return object.rss.channel.item;
  } catch (error) {
    console.log(error);
  }
};

export default parseFeed;
