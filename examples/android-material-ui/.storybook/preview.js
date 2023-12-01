import { DeviceDecorator } from "@storybook/native-addon";
import {getGlobalLocationJson} from "@storybook/native-devices";


const preview = {
    globalTypes: {
        // location: {
        //     description: 'Device Location',
        //     defaultValue: getGlobalLocationJson(
        //         {
        //             defaultCode: "US",
        //             filterCodes: ["US","MY"],
        //             locations: [
        //                 {
        //                     name: "Malaysia",
        //                     city: "Kuala Lumpur",
        //                     code2: "MY",
        //                     code3: "MYS",
        //                     latlng: [
        //                         2.5,
        //                         112.5
        //                     ],
        //                     flag: "🇲🇾"
        //                 }
        //             ]
        //         }
        //     )
        // },
    },
    decorators: [DeviceDecorator]
};

export default preview;
