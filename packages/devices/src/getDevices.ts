import { Platform, GlobalLocation, Font } from "@storybook/native-types";

export const getDefaultDevice = (platform: Platform): string => {
    if (platform === "android") {
        return "nexus5";
    }
    if (platform === "ios") {
        return "iphone15pro";
    }

    throw new Error(`No device for platform: ${platform}`);
};

export const getDevices = (platform: Platform): string[] => {
    if (platform === "android") {
        return [
            "nexus5",
            "nexus7",
            "nexus9",
            "pixel4",
            "pixel4xl",
            "pixel6",
            "pixel6pro",
            "pixel7",
            "pixel7pro",
            "galaxytabs7"
        ];
    }
    if (platform === "ios") {
        return [
            "ipadair",
            "iphone6s",
            "iphone6splus",
            "ipadair2",
            "iphone9",
            "iphone11pro",
            "iphone11promax",
            "iphone12",
            "iphone12mini",
            "iphone12pro",
            "iphone12promax",
            "iphone14pro",
            "iphone14promax",
            "iphone15pro",
            "iphone15promax"
        ];
    }

    throw new Error(`No devices for platform: ${platform}`);
};

export const getDefaultOsVersion = (platform: Platform): string => {
    if (platform === "android") {
        return "11.0";
    }
    if (platform === "ios") {
        return "17.0";
    }

    throw new Error(`No osVersion for platform: ${platform}`);
};

export const getFonts = (platform: Platform): Font[] => {
    if (platform === "android") {
        return [
            { name: "Small", value: "0.85" },
            { name: "Default", value: "1.00" },
            { name: "Large", value: "1.15" },
            { name: "Larger", value: "1.30" }
        ];
    }
    if (platform === "ios") {
        return [
            { name: "Extra Small", value: "UICTContentSizeCategoryXS" },
            { name: "Small", value: "UICTContentSizeCategoryS" },
            { name: "Medium", value: "UICTContentSizeCategoryM" },
            { name: "Large", value: "UICTContentSizeCategoryL" },
            { name: "Extra Large", value: "UICTContentSizeCategoryXL" },
            { name: "Double Extra Large", value: "UICTContentSizeCategoryXXL" },
            {
                name: "Triple Extra Large",
                value: "UICTContentSizeCategoryXXXL"
            },
            {
                name: "Accessibility Medium",
                value: "UICTContentSizeCategoryAccessibilityM"
            },
            {
                name: "Accessibility Large",
                value: "UICTContentSizeCategoryAccessibilityL"
            },
            {
                name: "Accessibility Extra Large",
                value: "UICTContentSizeCategoryAccessibilityXL"
            },
            {
                name: "Accessibility Double Extra Large",
                value: "UICTContentSizeCategoryAccessibilityXL"
            },
            {
                name: "Accessibility Triple Extra Large",
                value: "UICTContentSizeCategoryAccessibilityXXXL"
            }
        ];
    }

    throw new Error(`No font for platform: ${platform}`);
};

export const getDefaultFont = (platform: Platform): Font => {
    if (platform === "android") {
        return { name: "Default", value: "1.00" };
    }
    if (platform === "ios") {
        return { name: "Medium", value: "UICTContentSizeCategoryM" };
    }

    throw new Error(`No font for platform: ${platform}`);
};

export const getOsVersions = (platform: Platform): string[] => {
    if (platform === "android") {
        return [
            "4.4",
            "5.1",
            "6.0",
            "7.1",
            "8.1",
            "9.0",
            "10.0",
            "11.0",
            "12.0",
            "13.0"
        ];
    }
    if (platform === "ios") {
        return ["11.4", "12.4", "13.7", "14.5", "15.5", "16.0", "17.0"];
    }

    throw new Error(`No osVersions for platform: ${platform}`);
};

export const getDefaultLocationCode = () => {
    return "US";
};

export const getLocations = () => {
    return [
        {
            name: "Afghanistan",
            city: "Kabul",
            code2: "AF",
            code3: "AFG",
            latlng: [34.5260109, 69.1776838],
            flag: "🇦🇫"
        },
        {
            name: "Åland Islands",
            city: "Mariehamn",
            code2: "AX",
            code3: "ALA",
            latlng: [60.102423, 19.94126],
            flag: "🇦🇽"
        },
        {
            name: "Albania",
            city: "Tirana",
            code2: "AL",
            code3: "ALB",
            latlng: [41.3305141, 19.825562857582966],
            flag: "🇦🇱"
        },
        {
            name: "Algeria",
            city: "Algiers",
            code2: "DZ",
            code3: "DZA",
            latlng: [36.7753606, 3.0601882],
            flag: "🇩🇿"
        },
        {
            name: "American Samoa",
            city: "Pago Pago",
            code2: "AS",
            code3: "ASM",
            latlng: [-14.2754786, -170.7048298],
            flag: "🇦🇸"
        },
        {
            name: "Andorra",
            city: "Andorra la Vella",
            code2: "AD",
            code3: "AND",
            latlng: [42.5069391, 1.5212467],
            flag: "🇦🇩"
        },
        {
            name: "Angola",
            city: "Luanda",
            code2: "AO",
            code3: "AGO",
            latlng: [-8.8272699, 13.2439512],
            flag: "🇦🇴"
        },
        {
            name: "Anguilla",
            city: "The Valley",
            code2: "AI",
            code3: "AIA",
            latlng: [18.2145861, -63.0517759],
            flag: "🇦🇮"
        },
        {
            name: "Antigua and Barbuda",
            city: "Saint John's",
            code2: "AG",
            code3: "ATG",
            latlng: [17.1184569, -61.8448509],
            flag: "🇦🇬"
        },
        {
            name: "Argentina",
            city: "Buenos Aires",
            code2: "AR",
            code3: "ARG",
            latlng: [-34.6075682, -58.4370894],
            flag: "🇦🇷"
        },
        {
            name: "Armenia",
            city: "Yerevan",
            code2: "AM",
            code3: "ARM",
            latlng: [40.1776245, 44.5126174],
            flag: "🇦🇲"
        },
        {
            name: "Aruba",
            city: "Oranjestad",
            code2: "AW",
            code3: "ABW",
            latlng: [12.5268736, -70.0356845],
            flag: "🇦🇼"
        },
        {
            name: "Australia",
            city: "Canberra",
            code2: "AU",
            code3: "AUS",
            latlng: [-35.2975906, 149.1012676],
            flag: "🇦🇺"
        },
        {
            name: "Austria",
            city: "Vienna",
            code2: "AT",
            code3: "AUT",
            latlng: [48.2083537, 16.3725042],
            flag: "🇦🇹"
        },
        {
            name: "Azerbaijan",
            city: "Baku",
            code2: "AZ",
            code3: "AZE",
            latlng: [40.3755885, 49.8328009],
            flag: "🇦🇿"
        },
        {
            name: "Bahamas",
            city: "Nassau",
            code2: "BS",
            code3: "BHS",
            latlng: [25.0783456, -77.3383331],
            flag: "🇧🇸"
        },
        {
            name: "Bahrain",
            city: "Manama",
            code2: "BH",
            code3: "BHR",
            latlng: [26.2235041, 50.5822436],
            flag: "🇧🇭"
        },
        {
            name: "Bangladesh",
            city: "Dhaka",
            code2: "BD",
            code3: "BGD",
            latlng: [23.7644025, 90.389015],
            flag: "🇧🇩"
        },
        {
            name: "Barbados",
            city: "Bridgetown",
            code2: "BB",
            code3: "BRB",
            latlng: [13.0977832, -59.6184184],
            flag: "🇧🇧"
        },
        {
            name: "Belarus",
            city: "Minsk",
            code2: "BY",
            code3: "BLR",
            latlng: [53.9024716, 27.5618225],
            flag: "🇧🇾"
        },
        {
            name: "Belgium",
            city: "Brussels",
            code2: "BE",
            code3: "BEL",
            latlng: [50.8465573, 4.351697],
            flag: "🇧🇪"
        },
        {
            name: "Belize",
            city: "Belmopan",
            code2: "BZ",
            code3: "BLZ",
            latlng: [17.250199, -88.770018],
            flag: "🇧🇿"
        },
        {
            name: "Benin",
            city: "Porto-Novo",
            code2: "BJ",
            code3: "BEN",
            latlng: [6.4990718, 2.6253361],
            flag: "🇧🇯"
        },
        {
            name: "Bermuda",
            city: "Hamilton",
            code2: "BM",
            code3: "BMU",
            latlng: [43.2560802, -79.8728583],
            flag: "🇧🇲"
        },
        {
            name: "Bhutan",
            city: "Thimphu",
            code2: "BT",
            code3: "BTN",
            latlng: [27.4713546, 89.6336729],
            flag: "🇧🇹"
        },
        {
            name: "Bolivia (Plurinational State of)",
            city: "Sucre",
            code2: "BO",
            code3: "BOL",
            latlng: [-19.0477251, -65.2594306],
            flag: "🇧🇴"
        },
        {
            name: "Bonaire, Sint Eustatius and Saba",
            city: "Kralendijk",
            code2: "BQ",
            code3: "BES",
            latlng: [12.1472869, -68.2740206],
            flag: "🇧🇶"
        },
        {
            name: "Bosnia and Herzegovina",
            city: "Sarajevo",
            code2: "BA",
            code3: "BIH",
            latlng: [43.8519774, 18.3866868],
            flag: "🇧🇦"
        },
        {
            name: "Botswana",
            city: "Gaborone",
            code2: "BW",
            code3: "BWA",
            latlng: [-24.6581357, 25.9088474],
            flag: "🇧🇼"
        },
        {
            name: "Brazil",
            city: "Brasília",
            code2: "BR",
            code3: "BRA",
            latlng: [-15.7934036, -47.8823172],
            flag: "🇧🇷"
        },
        {
            name: "British Indian Ocean Territory",
            city: "Diego Garcia",
            code2: "IO",
            code3: "IOT",
            latlng: [-7.338358449999999, 72.47181546315355],
            flag: "🇮🇴"
        },
        {
            name: "Virgin Islands (British)",
            city: "Road Town",
            code2: "VG",
            code3: "VGB",
            latlng: [18.4257128, -64.6232227],
            flag: "🇻🇬"
        },
        {
            name: "Virgin Islands (U.S.)",
            city: "Charlotte Amalie",
            code2: "VI",
            code3: "VIR",
            latlng: [18.341137, -64.932789],
            flag: "🇻🇮"
        },
        {
            name: "Brunei Darussalam",
            city: "Bandar Seri Begawan",
            code2: "BN",
            code3: "BRN",
            latlng: [4.8895453, 114.9417574],
            flag: "🇧🇳"
        },
        {
            name: "Bulgaria",
            city: "Sofia",
            code2: "BG",
            code3: "BGR",
            latlng: [42.6977028, 23.3217359],
            flag: "🇧🇬"
        },
        {
            name: "Burkina Faso",
            city: "Ouagadougou",
            code2: "BF",
            code3: "BFA",
            latlng: [12.3681873, -1.5270944],
            flag: "🇧🇫"
        },
        {
            name: "Burundi",
            city: "Gitega",
            code2: "BI",
            code3: "BDI",
            latlng: [-3.4284953, 29.9249718],
            flag: "🇧🇮"
        },
        {
            name: "Cambodia",
            city: "Phnom Penh",
            code2: "KH",
            code3: "KHM",
            latlng: [11.568271, 104.9224426],
            flag: "🇰🇭"
        },
        {
            name: "Cameroon",
            city: "Yaoundé",
            code2: "CM",
            code3: "CMR",
            latlng: [3.8689867, 11.5213344],
            flag: "🇨🇲"
        },
        {
            name: "Canada",
            city: "Ottawa",
            code2: "CA",
            code3: "CAN",
            latlng: [45.4208777, -75.6901106],
            flag: "🇨🇦"
        },
        {
            name: "Cabo Verde",
            city: "Praia",
            code2: "CV",
            code3: "CPV",
            latlng: [14.9162811, -23.5095095],
            flag: "🇨🇻"
        },
        {
            name: "Cayman Islands",
            city: "George Town",
            code2: "KY",
            code3: "CYM",
            latlng: [5.4141619, 100.3287352],
            flag: "🇰🇾"
        },
        {
            name: "Central African Republic",
            city: "Bangui",
            code2: "CF",
            code3: "CAF",
            latlng: [4.3907153, 18.5509126],
            flag: "🇨🇫"
        },
        {
            name: "Chad",
            city: "N'Djamena",
            code2: "TD",
            code3: "TCD",
            latlng: [12.1191543, 15.0502758],
            flag: "🇹🇩"
        },
        {
            name: "Chile",
            city: "Santiago",
            code2: "CL",
            code3: "CHL",
            latlng: [9.8694792, -83.7980749],
            flag: "🇨🇱"
        },
        {
            name: "China",
            city: "Beijing",
            code2: "CN",
            code3: "CHN",
            latlng: [39.906217, 116.3912757],
            flag: "🇨🇳"
        },
        {
            name: "Christmas Island",
            city: "Flying Fish Cove",
            code2: "CX",
            code3: "CXR",
            latlng: [-10.4213344, 105.674413],
            flag: "🇨🇽"
        },
        {
            name: "Cocos (Keeling) Islands",
            city: "West Island",
            code2: "CC",
            code3: "CCK",
            latlng: [-12.145866, 96.84227540282865],
            flag: "🇨🇨"
        },
        {
            name: "Colombia",
            city: "Bogotá",
            code2: "CO",
            code3: "COL",
            latlng: [4.6534649, -74.0836453],
            flag: "🇨🇴"
        },
        {
            name: "Comoros",
            city: "Moroni",
            code2: "KM",
            code3: "COM",
            latlng: [-11.6931255, 43.2543044],
            flag: "🇰🇲"
        },
        {
            name: "Congo",
            city: "Brazzaville",
            code2: "CG",
            code3: "COG",
            latlng: [-4.2694407, 15.2712256],
            flag: "🇨🇬"
        },
        {
            name: "Congo (Democratic Republic of the)",
            city: "Kinshasa",
            code2: "CD",
            code3: "COD",
            latlng: [-4.3217055, 15.3125974],
            flag: "🇨🇩"
        },
        {
            name: "Cook Islands",
            city: "Avarua",
            code2: "CK",
            code3: "COK",
            latlng: [-21.2074736, -159.7708145],
            flag: "🇨🇰"
        },
        {
            name: "Costa Rica",
            city: "San José",
            code2: "CR",
            code3: "CRI",
            latlng: [9.9325427, -84.0795782],
            flag: "🇨🇷"
        },
        {
            name: "Croatia",
            city: "Zagreb",
            code2: "HR",
            code3: "HRV",
            latlng: [45.84264135, 15.962231476593626],
            flag: "🇭🇷"
        },
        {
            name: "Cuba",
            city: "Havana",
            code2: "CU",
            code3: "CUB",
            latlng: [23.135305, -82.3589631],
            flag: "🇨🇺"
        },
        {
            name: "Curaçao",
            city: "Willemstad",
            code2: "CW",
            code3: "CUW",
            latlng: [12.1066695, -68.9351307],
            flag: "🇨🇼"
        },
        {
            name: "Cyprus",
            city: "Nicosia",
            code2: "CY",
            code3: "CYP",
            latlng: [35.1748976, 33.3638568],
            flag: "🇨🇾"
        },
        {
            name: "Czech Republic",
            city: "Prague",
            code2: "CZ",
            code3: "CZE",
            latlng: [50.0874654, 14.4212535],
            flag: "🇨🇿"
        },
        {
            name: "Denmark",
            city: "Copenhagen",
            code2: "DK",
            code3: "DNK",
            latlng: [55.6867243, 12.5700724],
            flag: "🇩🇰"
        },
        {
            name: "Djibouti",
            city: "Djibouti",
            code2: "DJ",
            code3: "DJI",
            latlng: [11.5936903, 43.1472724],
            flag: "🇩🇯"
        },
        {
            name: "Dominica",
            city: "Roseau",
            code2: "DM",
            code3: "DMA",
            latlng: [15.2991923, -61.3872868],
            flag: "🇩🇲"
        },
        {
            name: "Dominican Republic",
            city: "Santo Domingo",
            code2: "DO",
            code3: "DOM",
            latlng: [18.4801972, -69.942111],
            flag: "🇩🇴"
        },
        {
            name: "Ecuador",
            city: "Quito",
            code2: "EC",
            code3: "ECU",
            latlng: [-0.2201641, -78.5123274],
            flag: "🇪🇨"
        },
        {
            name: "Egypt",
            city: "Cairo",
            code2: "EG",
            code3: "EGY",
            latlng: [30.0443879, 31.2357257],
            flag: "🇪🇬"
        },
        {
            name: "El Salvador",
            city: "San Salvador",
            code2: "SV",
            code3: "SLV",
            latlng: [13.6989939, -89.1914249],
            flag: "🇸🇻"
        },
        {
            name: "Equatorial Guinea",
            city: "Malabo",
            code2: "GQ",
            code3: "GNQ",
            latlng: [3.752828, 8.780061],
            flag: "🇬🇶"
        },
        {
            name: "Eritrea",
            city: "Asmara",
            code2: "ER",
            code3: "ERI",
            latlng: [15.3389667, 38.9326763],
            flag: "🇪🇷"
        },
        {
            name: "Estonia",
            city: "Tallinn",
            code2: "EE",
            code3: "EST",
            latlng: [59.4372155, 24.7453688],
            flag: "🇪🇪"
        },
        {
            name: "Ethiopia",
            city: "Addis Ababa",
            code2: "ET",
            code3: "ETH",
            latlng: [9.0107934, 38.7612525],
            flag: "🇪🇹"
        },
        {
            name: "Falkland Islands (Malvinas)",
            city: "Stanley",
            code2: "FK",
            code3: "FLK",
            latlng: [-51.6950575, -57.8491693],
            flag: "🇫🇰"
        },
        {
            name: "Faroe Islands",
            city: "Tórshavn",
            code2: "FO",
            code3: "FRO",
            latlng: [62.012, -6.768],
            flag: "🇫🇴"
        },
        {
            name: "Fiji",
            city: "Suva",
            code2: "FJ",
            code3: "FJI",
            latlng: [-18.1415884, 178.4421662],
            flag: "🇫🇯"
        },
        {
            name: "Finland",
            city: "Helsinki",
            code2: "FI",
            code3: "FIN",
            latlng: [60.1674881, 24.9427473],
            flag: "🇫🇮"
        },
        {
            name: "France",
            city: "Paris",
            code2: "FR",
            code3: "FRA",
            latlng: [48.8588897, 2.3200410217200766],
            flag: "🇫🇷"
        },
        {
            name: "French Guiana",
            city: "Cayenne",
            code2: "GF",
            code3: "GUF",
            latlng: [4.9371143, -52.3258307],
            flag: "🇬🇫"
        },
        {
            name: "French Polynesia",
            city: "Papeetē",
            code2: "PF",
            code3: "PYF",
            latlng: [-17.5373835, -149.5659964],
            flag: "🇵🇫"
        },
        {
            name: "French Southern Territories",
            city: "Port-aux-Français",
            code2: "TF",
            code3: "ATF",
            latlng: [-49.3497607, 70.2199565],
            flag: "🇹🇫"
        },
        {
            name: "Gabon",
            city: "Libreville",
            code2: "GA",
            code3: "GAB",
            latlng: [0.390002, 9.454001],
            flag: "🇬🇦"
        },
        {
            name: "Gambia",
            city: "Banjul",
            code2: "GM",
            code3: "GMB",
            latlng: [13.4410165, -16.56275092072591],
            flag: "🇬🇲"
        },
        {
            name: "Georgia",
            city: "Tbilisi",
            code2: "GE",
            code3: "GEO",
            latlng: [41.6934591, 44.8014495],
            flag: "🇬🇪"
        },
        {
            name: "Germany",
            city: "Berlin",
            code2: "DE",
            code3: "DEU",
            latlng: [52.5170365, 13.3888599],
            flag: "🇩🇪"
        },
        {
            name: "Ghana",
            city: "Accra",
            code2: "GH",
            code3: "GHA",
            latlng: [5.5571096, -0.2012376],
            flag: "🇬🇭"
        },
        {
            name: "Gibraltar",
            city: "Gibraltar",
            code2: "GI",
            code3: "GIB",
            latlng: [36.140807, -5.3541295],
            flag: "🇬🇮"
        },
        {
            name: "Greece",
            city: "Athens",
            code2: "GR",
            code3: "GRC",
            latlng: [37.9839412, 23.7283052],
            flag: "🇬🇷"
        },
        {
            name: "Greenland",
            city: "Nuuk",
            code2: "GL",
            code3: "GRL",
            latlng: [64.175029, -51.7355386],
            flag: "🇬🇱"
        },
        {
            name: "Grenada",
            city: "St. George's",
            code2: "GD",
            code3: "GRD",
            latlng: [12.0535331, -61.751805],
            flag: "🇬🇩"
        },
        {
            name: "Guadeloupe",
            city: "Basse-Terre",
            code2: "GP",
            code3: "GLP",
            latlng: [16.0000778, -61.7333373],
            flag: "🇬🇵"
        },
        {
            name: "Guam",
            city: "Hagåtña",
            code2: "GU",
            code3: "GUM",
            latlng: [13.4773442, 144.7521907],
            flag: "🇬🇺"
        },
        {
            name: "Guatemala",
            city: "Guatemala City",
            code2: "GT",
            code3: "GTM",
            latlng: [14.6222328, -90.5185188],
            flag: "🇬🇹"
        },
        {
            name: "Guernsey",
            city: "St. Peter Port",
            code2: "GG",
            code3: "GGY",
            latlng: [49.4568142, -2.5389979],
            flag: "🇬🇬"
        },
        {
            name: "Guinea",
            city: "Conakry",
            code2: "GN",
            code3: "GIN",
            latlng: [9.5170602, -13.6998434],
            flag: "🇬🇳"
        },
        {
            name: "Guinea-Bissau",
            city: "Bissau",
            code2: "GW",
            code3: "GNB",
            latlng: [11.861324, -15.583055],
            flag: "🇬🇼"
        },
        {
            name: "Guyana",
            city: "Georgetown",
            code2: "GY",
            code3: "GUY",
            latlng: [6.8137426, -58.1624465],
            flag: "🇬🇾"
        },
        {
            name: "Haiti",
            city: "Port-au-Prince",
            code2: "HT",
            code3: "HTI",
            latlng: [18.547327, -72.3395928],
            flag: "🇭🇹"
        },
        {
            name: "Vatican City",
            city: "Vatican City",
            code2: "VA",
            code3: "VAT",
            latlng: [41.9034912, 12.4528349],
            flag: "🇻🇦"
        },
        {
            name: "Honduras",
            city: "Tegucigalpa",
            code2: "HN",
            code3: "HND",
            latlng: [14.1057433, -87.2040052],
            flag: "🇭🇳"
        },
        {
            name: "Hong Kong",
            city: "City of Victoria",
            code2: "HK",
            code3: "HKG",
            latlng: [22.2793278, 114.1628131],
            flag: "🇭🇰"
        },
        {
            name: "Hungary",
            city: "Budapest",
            code2: "HU",
            code3: "HUN",
            latlng: [47.4979937, 19.0403594],
            flag: "🇭🇺"
        },
        {
            name: "Iceland",
            city: "Reykjavík",
            code2: "IS",
            code3: "ISL",
            latlng: [64.145981, -21.9422367],
            flag: "🇮🇸"
        },
        {
            name: "India",
            city: "New Delhi",
            code2: "IN",
            code3: "IND",
            latlng: [28.6138954, 77.2090057],
            flag: "🇮🇳"
        },
        {
            name: "Indonesia",
            city: "Jakarta",
            code2: "ID",
            code3: "IDN",
            latlng: [-6.1753942, 106.827183],
            flag: "🇮🇩"
        },
        {
            name: "Côte d'Ivoire",
            city: "Yamoussoukro",
            code2: "CI",
            code3: "CIV",
            latlng: [6.809107, -5.273263],
            flag: "🇨🇮"
        },
        {
            name: "Iran (Islamic Republic of)",
            city: "Tehran",
            code2: "IR",
            code3: "IRN",
            latlng: [35.6892523, 51.3896004],
            flag: "🇮🇷"
        },
        {
            name: "Iraq",
            city: "Baghdad",
            code2: "IQ",
            code3: "IRQ",
            latlng: [33.3061701, 44.3872213],
            flag: "🇮🇶"
        },
        {
            name: "Ireland",
            city: "Dublin",
            code2: "IE",
            code3: "IRL",
            latlng: [53.3498006, -6.2602964],
            flag: "🇮🇪"
        },
        {
            name: "Isle of Man",
            city: "Douglas",
            code2: "IM",
            code3: "IMN",
            latlng: [54.149774, -4.4779021],
            flag: "🇮🇲"
        },
        {
            name: "Israel",
            city: "Jerusalem",
            code2: "IL",
            code3: "ISR",
            latlng: [31.79592425, 35.21198075969497],
            flag: "🇮🇱"
        },
        {
            name: "Italy",
            city: "Rome",
            code2: "IT",
            code3: "ITA",
            latlng: [41.8933203, 12.4829321],
            flag: "🇮🇹"
        },
        {
            name: "Jamaica",
            city: "Kingston",
            code2: "JM",
            code3: "JAM",
            latlng: [17.9712148, -76.7928128],
            flag: "🇯🇲"
        },
        {
            name: "Japan",
            city: "Tokyo",
            code2: "JP",
            code3: "JPN",
            latlng: [35.6828387, 139.7594549],
            flag: "🇯🇵"
        },
        {
            name: "Jersey",
            city: "Saint Helier",
            code2: "JE",
            code3: "JEY",
            latlng: [47.3843871, 4.6833254],
            flag: "🇯🇪"
        },
        {
            name: "Jordan",
            city: "Amman",
            code2: "JO",
            code3: "JOR",
            latlng: [31.9515694, 35.9239625],
            flag: "🇯🇴"
        },
        {
            name: "Kazakhstan",
            city: "Nur-Sultan",
            code2: "KZ",
            code3: "KAZ",
            latlng: [51.1282205, 71.4306682],
            flag: "🇰🇿"
        },
        {
            name: "Kenya",
            city: "Nairobi",
            code2: "KE",
            code3: "KEN",
            latlng: [-1.30326415, 36.826384099341595],
            flag: "🇰🇪"
        },
        {
            name: "Kiribati",
            city: "South Tarawa",
            code2: "KI",
            code3: "KIR",
            latlng: [1.3490778, 173.0386512],
            flag: "🇰🇮"
        },
        {
            name: "Kuwait",
            city: "Kuwait City",
            code2: "KW",
            code3: "KWT",
            latlng: [29.3796532, 47.9734174],
            flag: "🇰🇼"
        },
        {
            name: "Kyrgyzstan",
            city: "Bishkek",
            code2: "KG",
            code3: "KGZ",
            latlng: [42.8765615, 74.6070079],
            flag: "🇰🇬"
        },
        {
            name: "Lao People's Democratic Republic",
            city: "Vientiane",
            code2: "LA",
            code3: "LAO",
            latlng: [17.9640988, 102.6133707],
            flag: "🇱🇦"
        },
        {
            name: "Latvia",
            city: "Riga",
            code2: "LV",
            code3: "LVA",
            latlng: [56.9493977, 24.1051846],
            flag: "🇱🇻"
        },
        {
            name: "Lebanon",
            city: "Beirut",
            code2: "LB",
            code3: "LBN",
            latlng: [33.8959203, 35.47843],
            flag: "🇱🇧"
        },
        {
            name: "Lesotho",
            city: "Maseru",
            code2: "LS",
            code3: "LSO",
            latlng: [-29.310054, 27.478222],
            flag: "🇱🇸"
        },
        {
            name: "Liberia",
            city: "Monrovia",
            code2: "LR",
            code3: "LBR",
            latlng: [6.328034, -10.797788],
            flag: "🇱🇷"
        },
        {
            name: "Libya",
            city: "Tripoli",
            code2: "LY",
            code3: "LBY",
            latlng: [32.896672, 13.1777923],
            flag: "🇱🇾"
        },
        {
            name: "Liechtenstein",
            city: "Vaduz",
            code2: "LI",
            code3: "LIE",
            latlng: [47.1392862, 9.5227962],
            flag: "🇱🇮"
        },
        {
            name: "Lithuania",
            city: "Vilnius",
            code2: "LT",
            code3: "LTU",
            latlng: [54.6870458, 25.2829111],
            flag: "🇱🇹"
        },
        {
            name: "Luxembourg",
            city: "Luxembourg",
            code2: "LU",
            code3: "LUX",
            latlng: [49.6112768, 6.129799],
            flag: "🇱🇺"
        },
        {
            name: "Macao",
            city: "",
            code2: "MO",
            code3: "MAC",
            latlng: [22.1899448, 113.5380454],
            flag: "🇲🇴"
        },
        {
            name: "North Macedonia",
            city: "Skopje",
            code2: "MK",
            code3: "MKD",
            latlng: [41.9960924, 21.4316495],
            flag: "🇲🇰"
        },
        {
            name: "Madagascar",
            city: "Antananarivo",
            code2: "MG",
            code3: "MDG",
            latlng: [-18.9100122, 47.5255809],
            flag: "🇲🇬"
        },
        {
            name: "Malawi",
            city: "Lilongwe",
            code2: "MW",
            code3: "MWI",
            latlng: [-13.9875107, 33.768144],
            flag: "🇲🇼"
        },
        {
            name: "Malaysia",
            city: "Kuala Lumpur",
            code2: "MY",
            code3: "MYS",
            latlng: [3.1516964, 101.6942371],
            flag: "🇲🇾"
        },
        {
            name: "Maldives",
            city: "Malé",
            code2: "MV",
            code3: "MDV",
            latlng: [4.1779879, 73.5107387],
            flag: "🇲🇻"
        },
        {
            name: "Mali",
            city: "Bamako",
            code2: "ML",
            code3: "MLI",
            latlng: [12.649319, -8.000337],
            flag: "🇲🇱"
        },
        {
            name: "Malta",
            city: "Valletta",
            code2: "MT",
            code3: "MLT",
            latlng: [35.8989818, 14.5136759],
            flag: "🇲🇹"
        },
        {
            name: "Marshall Islands",
            city: "Majuro",
            code2: "MH",
            code3: "MHL",
            latlng: [7.0909924, 171.3816354],
            flag: "🇲🇭"
        },
        {
            name: "Martinique",
            city: "Fort-de-France",
            code2: "MQ",
            code3: "MTQ",
            latlng: [14.6027962, -61.0676724],
            flag: "🇲🇶"
        },
        {
            name: "Mauritania",
            city: "Nouakchott",
            code2: "MR",
            code3: "MRT",
            latlng: [18.0792379, -15.9780071],
            flag: "🇲🇷"
        },
        {
            name: "Mauritius",
            city: "Port Louis",
            code2: "MU",
            code3: "MUS",
            latlng: [-20.1624522, 57.5028044],
            flag: "🇲🇺"
        },
        {
            name: "Mayotte",
            city: "Mamoudzou",
            code2: "YT",
            code3: "MYT",
            latlng: [-12.7804136, 45.2279761],
            flag: "🇾🇹"
        },
        {
            name: "Mexico",
            city: "Mexico City",
            code2: "MX",
            code3: "MEX",
            latlng: [19.4326296, -99.1331785],
            flag: "🇲🇽"
        },
        {
            name: "Micronesia (Federated States of)",
            city: "Palikir",
            code2: "FM",
            code3: "FSM",
            latlng: [6.920744, 158.1627143],
            flag: "🇫🇲"
        },
        {
            name: "Moldova (Republic of)",
            city: "Chișinău",
            code2: "MD",
            code3: "MDA",
            latlng: [47.0245117, 28.8322923],
            flag: "🇲🇩"
        },
        {
            name: "Monaco",
            city: "Monaco",
            code2: "MC",
            code3: "MCO",
            latlng: [43.7311424, 7.4197576],
            flag: "🇲🇨"
        },
        {
            name: "Mongolia",
            city: "Ulan Bator",
            code2: "MN",
            code3: "MNG",
            latlng: [47.9184676, 106.9177016],
            flag: "🇲🇳"
        },
        {
            name: "Montserrat",
            city: "Plymouth",
            code2: "MS",
            code3: "MSR",
            latlng: [50.3712659, -4.1425658],
            flag: "🇲🇸"
        },
        {
            name: "Morocco",
            city: "Rabat",
            code2: "MA",
            code3: "MAR",
            latlng: [34.022405, -6.834543],
            flag: "🇲🇦"
        },
        {
            name: "Mozambique",
            city: "Maputo",
            code2: "MZ",
            code3: "MOZ",
            latlng: [-25.966213, 32.56745],
            flag: "🇲🇿"
        },
        {
            name: "Myanmar",
            city: "Naypyidaw",
            code2: "MM",
            code3: "MMR",
            latlng: [19.7540045, 96.1344976],
            flag: "🇲🇲"
        },
        {
            name: "Namibia",
            city: "Windhoek",
            code2: "NA",
            code3: "NAM",
            latlng: [-22.5776104, 17.0772739],
            flag: "🇳🇦"
        },
        {
            name: "Nauru",
            city: "Yaren",
            code2: "NR",
            code3: "NRU",
            latlng: [-0.5471014, 166.9164002],
            flag: "🇳🇷"
        },
        {
            name: "Nepal",
            city: "Kathmandu",
            code2: "NP",
            code3: "NPL",
            latlng: [27.708317, 85.3205817],
            flag: "🇳🇵"
        },
        {
            name: "Netherlands",
            city: "Amsterdam",
            code2: "NL",
            code3: "NLD",
            latlng: [52.3727598, 4.8936041],
            flag: "🇳🇱"
        },
        {
            name: "New Caledonia",
            city: "Nouméa",
            code2: "NC",
            code3: "NCL",
            latlng: [-22.2745264, 166.442419],
            flag: "🇳🇨"
        },
        {
            name: "New Zealand",
            city: "Wellington",
            code2: "NZ",
            code3: "NZL",
            latlng: [-41.2887953, 174.7772114],
            flag: "🇳🇿"
        },
        {
            name: "Nicaragua",
            city: "Managua",
            code2: "NI",
            code3: "NIC",
            latlng: [12.1544035, -86.2737642],
            flag: "🇳🇮"
        },
        {
            name: "Niger",
            city: "Niamey",
            code2: "NE",
            code3: "NER",
            latlng: [13.524834, 2.109823],
            flag: "🇳🇪"
        },
        {
            name: "Nigeria",
            city: "Abuja",
            code2: "NG",
            code3: "NGA",
            latlng: [9.0643305, 7.4892974],
            flag: "🇳🇬"
        },
        {
            name: "Niue",
            city: "Alofi",
            code2: "NU",
            code3: "NIU",
            latlng: [-19.0534159, -169.919199],
            flag: "🇳🇺"
        },
        {
            name: "Norfolk Island",
            city: "Kingston",
            code2: "NF",
            code3: "NFK",
            latlng: [17.9712148, -76.7928128],
            flag: "🇳🇫"
        },
        {
            name: "Korea (Democratic People's Republic of)",
            city: "Pyongyang",
            code2: "KP",
            code3: "PRK",
            latlng: [39.0167979, 125.7473609],
            flag: "🇰🇵"
        },
        {
            name: "Northern Mariana Islands",
            city: "Saipan",
            code2: "MP",
            code3: "MNP",
            latlng: [15.1909825, 145.746743003024],
            flag: "🇲🇵"
        },
        {
            name: "Norway",
            city: "Oslo",
            code2: "NO",
            code3: "NOR",
            latlng: [59.9133301, 10.7389701],
            flag: "🇳🇴"
        },
        {
            name: "Oman",
            city: "Muscat",
            code2: "OM",
            code3: "OMN",
            latlng: [23.61515, 58.5912467],
            flag: "🇴🇲"
        },
        {
            name: "Pakistan",
            city: "Islamabad",
            code2: "PK",
            code3: "PAK",
            latlng: [33.6938118, 73.0651511],
            flag: "🇵🇰"
        },
        {
            name: "Palau",
            city: "Ngerulmud",
            code2: "PW",
            code3: "PLW",
            latlng: [7.5006446, 134.6242864],
            flag: "🇵🇼"
        },
        {
            name: "Palestine, State of",
            city: "Ramallah",
            code2: "PS",
            code3: "PSE",
            latlng: [31.9030543, 35.1952255],
            flag: "🇵🇸"
        },
        {
            name: "Panama",
            city: "Panama City",
            code2: "PA",
            code3: "PAN",
            latlng: [30.1600827, -85.6545729],
            flag: "🇵🇦"
        },
        {
            name: "Papua New Guinea",
            city: "Port Moresby",
            code2: "PG",
            code3: "PNG",
            latlng: [-9.4743301, 147.1599504],
            flag: "🇵🇬"
        },
        {
            name: "Paraguay",
            city: "Asunción",
            code2: "PY",
            code3: "PRY",
            latlng: [-25.2800459, -57.6343814],
            flag: "🇵🇾"
        },
        {
            name: "Peru",
            city: "Lima",
            code2: "PE",
            code3: "PER",
            latlng: [-12.0621065, -77.0365256],
            flag: "🇵🇪"
        },
        {
            name: "Philippines",
            city: "Manila",
            code2: "PH",
            code3: "PHL",
            latlng: [14.5948914, 120.9782618],
            flag: "🇵🇭"
        },
        {
            name: "Pitcairn",
            city: "Adamstown",
            code2: "PN",
            code3: "PCN",
            latlng: [-25.066667, -130.100205],
            flag: "🇵🇳"
        },
        {
            name: "Poland",
            city: "Warsaw",
            code2: "PL",
            code3: "POL",
            latlng: [52.2319581, 21.0067249],
            flag: "🇵🇱"
        },
        {
            name: "Portugal",
            city: "Lisbon",
            code2: "PT",
            code3: "PRT",
            latlng: [38.7077507, -9.1365919],
            flag: "🇵🇹"
        },
        {
            name: "Puerto Rico",
            city: "San Juan",
            code2: "PR",
            code3: "PRI",
            latlng: [18.465299, -66.116666],
            flag: "🇵🇷"
        },
        {
            name: "Qatar",
            city: "Doha",
            code2: "QA",
            code3: "QAT",
            latlng: [25.2856329, 51.5264162],
            flag: "🇶🇦"
        },
        {
            name: "Republic of Kosovo",
            city: "Pristina",
            code2: "XK",
            code3: "UNK",
            latlng: [42.6638771, 21.1640849],
            flag: "🇽🇰"
        },
        {
            name: "Réunion",
            city: "Saint-Denis",
            code2: "RE",
            code3: "REU",
            latlng: [48.935773, 2.3580232],
            flag: "🇷🇪"
        },
        {
            name: "Romania",
            city: "Bucharest",
            code2: "RO",
            code3: "ROU",
            latlng: [44.4361414, 26.1027202],
            flag: "🇷🇴"
        },
        {
            name: "Russian Federation",
            city: "Moscow",
            code2: "RU",
            code3: "RUS",
            latlng: [55.7504461, 37.6174943],
            flag: "🇷🇺"
        },
        {
            name: "Rwanda",
            city: "Kigali",
            code2: "RW",
            code3: "RWA",
            latlng: [-1.950851, 30.061507],
            flag: "🇷🇼"
        },
        {
            name: "Saint Barthélemy",
            city: "Gustavia",
            code2: "BL",
            code3: "BLM",
            latlng: [17.8957043, -62.8508372],
            flag: "🇧🇱"
        },
        {
            name: "Saint Helena, Ascension and Tristan da Cunha",
            city: "Jamestown",
            code2: "SH",
            code3: "SHN",
            latlng: [-15.9277296, -5.7160872],
            flag: "🇸🇭"
        },
        {
            name: "Saint Kitts and Nevis",
            city: "Basseterre",
            code2: "KN",
            code3: "KNA",
            latlng: [17.2960919, -62.722301],
            flag: "🇰🇳"
        },
        {
            name: "Saint Lucia",
            city: "Castries",
            code2: "LC",
            code3: "LCA",
            latlng: [43.6779101, 3.9868904],
            flag: "🇱🇨"
        },
        {
            name: "Saint Martin (French part)",
            city: "Marigot",
            code2: "MF",
            code3: "MAF",
            latlng: [18.0668544, -63.0848869],
            flag: "🇲🇫"
        },
        {
            name: "Saint Pierre and Miquelon",
            city: "Saint-Pierre",
            code2: "PM",
            code3: "SPM",
            latlng: [48.3832725, 7.4718731],
            flag: "🇵🇲"
        },
        {
            name: "Saint Vincent and the Grenadines",
            city: "Kingstown",
            code2: "VC",
            code3: "VCT",
            latlng: [13.1561864, -61.2279621],
            flag: "🇻🇨"
        },
        {
            name: "Samoa",
            city: "Apia",
            code2: "WS",
            code3: "WSM",
            latlng: [-13.8343691, -171.7692793],
            flag: "🇼🇸"
        },
        {
            name: "San Marino",
            city: "City of San Marino",
            code2: "SM",
            code3: "SMR",
            latlng: [43.9363996, 12.4466991],
            flag: "🇸🇲"
        },
        {
            name: "Sao Tome and Principe",
            city: "São Tomé",
            code2: "ST",
            code3: "STP",
            latlng: [0.3389242, 6.7313031],
            flag: "🇸🇹"
        },
        {
            name: "Saudi Arabia",
            city: "Riyadh",
            code2: "SA",
            code3: "SAU",
            latlng: [24.638916, 46.7160104],
            flag: "🇸🇦"
        },
        {
            name: "Senegal",
            city: "Dakar",
            code2: "SN",
            code3: "SEN",
            latlng: [14.693425, -17.447938],
            flag: "🇸🇳"
        },
        {
            name: "Serbia",
            city: "Belgrade",
            code2: "RS",
            code3: "SRB",
            latlng: [44.8178131, 20.4568974],
            flag: "🇷🇸"
        },
        {
            name: "Seychelles",
            city: "Victoria",
            code2: "SC",
            code3: "SYC",
            latlng: [48.4283182, -123.3649533],
            flag: "🇸🇨"
        },
        {
            name: "Sierra Leone",
            city: "Freetown",
            code2: "SL",
            code3: "SLE",
            latlng: [8.479004, -13.26795],
            flag: "🇸🇱"
        },
        {
            name: "Singapore",
            city: "Singapore",
            code2: "SG",
            code3: "SGP",
            latlng: [1.2899175, 103.8519072],
            flag: "🇸🇬"
        },
        {
            name: "Sint Maarten (Dutch part)",
            city: "Philipsburg",
            code2: "SX",
            code3: "SXM",
            latlng: [18.0250713, -63.0483073],
            flag: "🇸🇽"
        },
        {
            name: "Slovakia",
            city: "Bratislava",
            code2: "SK",
            code3: "SVK",
            latlng: [48.1435149, 17.108279],
            flag: "🇸🇰"
        },
        {
            name: "Slovenia",
            city: "Ljubljana",
            code2: "SI",
            code3: "SVN",
            latlng: [46.0500268, 14.5069289],
            flag: "🇸🇮"
        },
        {
            name: "Solomon Islands",
            city: "Honiara",
            code2: "SB",
            code3: "SLB",
            latlng: [-9.4310769, 159.9552552],
            flag: "🇸🇧"
        },
        {
            name: "Somalia",
            city: "Mogadishu",
            code2: "SO",
            code3: "SOM",
            latlng: [2.0349312, 45.3419183],
            flag: "🇸🇴"
        },
        {
            name: "South Africa",
            city: "Pretoria",
            code2: "ZA",
            code3: "ZAF",
            latlng: [-25.7459277, 28.1879101],
            flag: "🇿🇦"
        },
        {
            name: "South Georgia and the South Sandwich Islands",
            city: "King Edward Point",
            code2: "GS",
            code3: "SGS",
            latlng: [-54.283545, -36.4946355],
            flag: "🇬🇸"
        },
        {
            name: "Korea (Republic of)",
            city: "Seoul",
            code2: "KR",
            code3: "KOR",
            latlng: [37.5666791, 126.9782914],
            flag: "🇰🇷"
        },
        {
            name: "South Sudan",
            city: "Juba",
            code2: "SS",
            code3: "SSD",
            latlng: [4.8459246, 31.5959173],
            flag: "🇸🇸"
        },
        {
            name: "Spain",
            city: "Madrid",
            code2: "ES",
            code3: "ESP",
            latlng: [40.4167047, -3.7035825],
            flag: "🇪🇸"
        },
        {
            name: "Sri Lanka",
            city: "Sri Jayawardenepura Kotte",
            code2: "LK",
            code3: "LKA",
            latlng: [6.8883219, 79.9187415],
            flag: "🇱🇰"
        },
        {
            name: "Sudan",
            city: "Khartoum",
            code2: "SD",
            code3: "SDN",
            latlng: [15.5635972, 32.5349123],
            flag: "🇸🇩"
        },
        {
            name: "Suriname",
            city: "Paramaribo",
            code2: "SR",
            code3: "SUR",
            latlng: [5.8247628, -55.1703941],
            flag: "🇸🇷"
        },
        {
            name: "Svalbard and Jan Mayen",
            city: "Longyearbyen",
            code2: "SJ",
            code3: "SJM",
            latlng: [78.2231558, 15.6463656],
            flag: "🇸🇯"
        },
        {
            name: "Eswatini",
            city: "Mbabane",
            code2: "SZ",
            code3: "SWZ",
            latlng: [-26.325745, 31.144663],
            flag: "🇸🇿"
        },
        {
            name: "Sweden",
            city: "Stockholm",
            code2: "SE",
            code3: "SWE",
            latlng: [59.3251172, 18.0710935],
            flag: "🇸🇪"
        },
        {
            name: "Switzerland",
            city: "Bern",
            code2: "CH",
            code3: "CHE",
            latlng: [46.9482713, 7.4514512],
            flag: "🇨🇭"
        },
        {
            name: "Syrian Arab Republic",
            city: "Damascus",
            code2: "SY",
            code3: "SYR",
            latlng: [33.5130695, 36.3095814],
            flag: "🇸🇾"
        },
        {
            name: "Taiwan",
            city: "Taipei",
            code2: "TW",
            code3: "TWN",
            latlng: [25.0375198, 121.5636796],
            flag: "🇹🇼"
        },
        {
            name: "Tajikistan",
            city: "Dushanbe",
            code2: "TJ",
            code3: "TJK",
            latlng: [38.5425835, 68.81521423589763],
            flag: "🇹🇯"
        },
        {
            name: "Tanzania, United Republic of",
            city: "Dodoma",
            code2: "TZ",
            code3: "TZA",
            latlng: [-6.1791181, 35.7468174],
            flag: "🇹🇿"
        },
        {
            name: "Thailand",
            city: "Bangkok",
            code2: "TH",
            code3: "THA",
            latlng: [13.7524938, 100.4935089],
            flag: "🇹🇭"
        },
        {
            name: "Timor-Leste",
            city: "Dili",
            code2: "TL",
            code3: "TLS",
            latlng: [28.6517178, 77.2219388],
            flag: "🇹🇱"
        },
        {
            name: "Togo",
            city: "Lomé",
            code2: "TG",
            code3: "TGO",
            latlng: [6.130419, 1.215829],
            flag: "🇹🇬"
        },
        {
            name: "Tokelau",
            city: "Fakaofo",
            code2: "TK",
            code3: "TKL",
            latlng: [-9.3743046, -171.2645365],
            flag: "🇹🇰"
        },
        {
            name: "Tonga",
            city: "Nuku'alofa",
            code2: "TO",
            code3: "TON",
            latlng: [-21.1343401, -175.201808],
            flag: "🇹🇴"
        },
        {
            name: "Trinidad and Tobago",
            city: "Port of Spain",
            code2: "TT",
            code3: "TTO",
            latlng: [10.6572678, -61.5180173],
            flag: "🇹🇹"
        },
        {
            name: "Tunisia",
            city: "Tunis",
            code2: "TN",
            code3: "TUN",
            latlng: [36.8002068, 10.1857757],
            flag: "🇹🇳"
        },
        {
            name: "Turkey",
            city: "Ankara",
            code2: "TR",
            code3: "TUR",
            latlng: [39.9207886, 32.8540482],
            flag: "🇹🇷"
        },
        {
            name: "Turkmenistan",
            city: "Ashgabat",
            code2: "TM",
            code3: "TKM",
            latlng: [37.9404648, 58.3823487],
            flag: "🇹🇲"
        },
        {
            name: "Turks and Caicos Islands",
            city: "Cockburn Town",
            code2: "TC",
            code3: "TCA",
            latlng: [21.4607723, -71.1399956],
            flag: "🇹🇨"
        },
        {
            name: "Tuvalu",
            city: "Funafuti",
            code2: "TV",
            code3: "TUV",
            latlng: [-8.5199633, 179.1982548],
            flag: "🇹🇻"
        },
        {
            name: "Uganda",
            city: "Kampala",
            code2: "UG",
            code3: "UGA",
            latlng: [0.3177137, 32.5813539],
            flag: "🇺🇬"
        },
        {
            name: "Ukraine",
            city: "Kyiv",
            code2: "UA",
            code3: "UKR",
            latlng: [50.4500336, 30.5241361],
            flag: "🇺🇦"
        },
        {
            name: "United Arab Emirates",
            city: "Abu Dhabi",
            code2: "AE",
            code3: "ARE",
            latlng: [24.4538352, 54.3774014],
            flag: "🇦🇪"
        },
        {
            name: "United Kingdom of Great Britain and Northern Ireland",
            city: "London",
            code2: "GB",
            code3: "GBR",
            latlng: [51.5073219, -0.1276474],
            flag: "🇬🇧"
        },
        {
            name: "United States of America",
            city: "Washington, D.C.",
            code2: "US",
            code3: "USA",
            latlng: [38.8950368, -77.0365427],
            flag: "🇺🇸"
        },
        {
            name: "Uruguay",
            city: "Montevideo",
            code2: "UY",
            code3: "URY",
            latlng: [-34.9058916, -56.1913095],
            flag: "🇺🇾"
        },
        {
            name: "Uzbekistan",
            city: "Tashkent",
            code2: "UZ",
            code3: "UZB",
            latlng: [41.3123363, 69.2787079],
            flag: "🇺🇿"
        },
        {
            name: "Vanuatu",
            city: "Port Vila",
            code2: "VU",
            code3: "VUT",
            latlng: [-17.7414972, 168.3150163],
            flag: "🇻🇺"
        },
        {
            name: "Venezuela (Bolivarian Republic of)",
            city: "Caracas",
            code2: "VE",
            code3: "VEN",
            latlng: [10.5060934, -66.9146008],
            flag: "🇻🇪"
        },
        {
            name: "Vietnam",
            city: "Hanoi",
            code2: "VN",
            code3: "VNM",
            latlng: [21.0294498, 105.8544441],
            flag: "🇻🇳"
        },
        {
            name: "Wallis and Futuna",
            city: "Mata-Utu",
            code2: "WF",
            code3: "WLF",
            latlng: [-13.2820419, -176.1740224],
            flag: "🇼🇫"
        },
        {
            name: "Western Sahara",
            city: "El Aaiún",
            code2: "EH",
            code3: "ESH",
            latlng: [27.154512, -13.1953921],
            flag: "🇪🇭"
        },
        {
            name: "Yemen",
            city: "Sana'a",
            code2: "YE",
            code3: "YEM",
            latlng: [15.3538569, 44.2058841],
            flag: "🇾🇪"
        },
        {
            name: "Zambia",
            city: "Lusaka",
            code2: "ZM",
            code3: "ZMB",
            latlng: [-15.4164124, 28.2824793],
            flag: "🇿🇲"
        },
        {
            name: "Zimbabwe",
            city: "Harare",
            code2: "ZW",
            code3: "ZWE",
            latlng: [-17.831773, 31.045686],
            flag: "🇿🇼"
        }
    ];
};

export const getLocationsCodes = () => {
    return getLocations().map((e) => {
        return e.code2;
    });
};

export const getDefaultLocation = (code?: string) => {
    return getLocations().filter((e) => {
        return e.code2 === (code ?? getDefaultLocationCode());
    })[0];
};

export const getFilteredLocations = (onlyCodes2: string[]) => {
    const filteredList = getLocations().filter((e) => {
        return onlyCodes2.includes(e.code2);
    });
    return filteredList.sort(
        (a, b) => onlyCodes2.indexOf(a.code2) - onlyCodes2.indexOf(b.code2)
    );
};

export const getGlobalLocationJson = (
    globalLocation: GlobalLocation
): string => {
    return JSON.stringify(globalLocation);
};
