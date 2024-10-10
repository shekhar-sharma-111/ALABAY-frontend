
import SvgBackgroundComponent from "@/components/svgbg";
import Component1 from "./component1/component1";
import Component2 from "./component2/component2";
import Component3 from "./component3/component3";
import Component4 from "./component4/component4";
import Component5 from "./component5/component5";
import Component7 from "./component7/component7";
import Component6 from "./component6/component6";
import Component8 from "./component8/component8";


export default function Drawer() {
  return (
    <>
    <div>
       
      <SvgBackgroundComponent>
        
            <Component1 />
            <Component2/>
            <Component3/>
            <Component4 />
            <Component5/>
            <Component6/>
            <Component7 />
            <Component8/>

       
      </SvgBackgroundComponent>
    </div>
    </>
  );
}
