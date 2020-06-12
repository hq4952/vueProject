import Mock from "mockjs"
import floor from "./floors.json";
import banners from "./banners.json"
import recommend from "./recommend.json"
Mock.mock("/mock/banners",{code:200,data:banners});
Mock.mock("/mock/floor",{code:200,data:floor});
Mock.mock("/mock/recommend",{code:200,data:recommend})
console.log("mock")