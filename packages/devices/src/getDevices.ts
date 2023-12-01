import { Platform } from "@storybook/native-types";

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
            latlng: [
                33,
                65
            ],
            flag: "🇦🇫"
        },
        {
            name: "Åland Islands",
            city: "Mariehamn",
            code2: "AX",
            code3: "ALA",
            latlng: [
                60.116667,
                19.9
            ],
            flag: "🇦🇽"
        },
        {
            name: "Albania",
            city: "Tirana",
            code2: "AL",
            code3: "ALB",
            latlng: [
                41,
                20
            ],
            flag: "🇦🇱"
        },
        {
            name: "Algeria",
            city: "Algiers",
            code2: "DZ",
            code3: "DZA",
            latlng: [
                28,
                3
            ],
            flag: "🇩🇿"
        },
        {
            name: "American Samoa",
            city: "Pago Pago",
            code2: "AS",
            code3: "ASM",
            latlng: [
                -14.33333333,
                -170
            ],
            flag: "🇦🇸"
        },
        {
            name: "Andorra",
            city: "Andorra la Vella",
            code2: "AD",
            code3: "AND",
            latlng: [
                42.5,
                1.5
            ],
            flag: "🇦🇩"
        },
        {
            name: "Angola",
            city: "Luanda",
            code2: "AO",
            code3: "AGO",
            latlng: [
                -12.5,
                18.5
            ],
            flag: "🇦🇴"
        },
        {
            name: "Anguilla",
            city: "The Valley",
            code2: "AI",
            code3: "AIA",
            latlng: [
                18.25,
                -63.16666666
            ],
            flag: "🇦🇮"
        },
        {
            name: "Antarctica",
            city: "",
            code2: "AQ",
            code3: "ATA",
            latlng: [
                -74.65,
                4.48
            ],
            flag: "🇦🇶"
        },
        {
            name: "Antigua and Barbuda",
            city: "Saint John's",
            code2: "AG",
            code3: "ATG",
            latlng: [
                17.05,
                -61.8
            ],
            flag: "🇦🇬"
        },
        {
            name: "Argentina",
            city: "Buenos Aires",
            code2: "AR",
            code3: "ARG",
            latlng: [
                -34,
                -64
            ],
            flag: "🇦🇷"
        },
        {
            name: "Armenia",
            city: "Yerevan",
            code2: "AM",
            code3: "ARM",
            latlng: [
                40,
                45
            ],
            flag: "🇦🇲"
        },
        {
            name: "Aruba",
            city: "Oranjestad",
            code2: "AW",
            code3: "ABW",
            latlng: [
                12.5,
                -69.96666666
            ],
            flag: "🇦🇼"
        },
        {
            name: "Australia",
            city: "Canberra",
            code2: "AU",
            code3: "AUS",
            latlng: [
                -27,
                133
            ],
            flag: "🇦🇺"
        },
        {
            name: "Austria",
            city: "Vienna",
            code2: "AT",
            code3: "AUT",
            latlng: [
                47.33333333,
                13.33333333
            ],
            flag: "🇦🇹"
        },
        {
            name: "Azerbaijan",
            city: "Baku",
            code2: "AZ",
            code3: "AZE",
            latlng: [
                40.5,
                47.5
            ],
            flag: "🇦🇿"
        },
        {
            name: "Bahamas",
            city: "Nassau",
            code2: "BS",
            code3: "BHS",
            latlng: [
                24.25,
                -76
            ],
            flag: "🇧🇸"
        },
        {
            name: "Bahrain",
            city: "Manama",
            code2: "BH",
            code3: "BHR",
            latlng: [
                26,
                50.55
            ],
            flag: "🇧🇭"
        },
        {
            name: "Bangladesh",
            city: "Dhaka",
            code2: "BD",
            code3: "BGD",
            latlng: [
                24,
                90
            ],
            flag: "🇧🇩"
        },
        {
            name: "Barbados",
            city: "Bridgetown",
            code2: "BB",
            code3: "BRB",
            latlng: [
                13.16666666,
                -59.53333333
            ],
            flag: "🇧🇧"
        },
        {
            name: "Belarus",
            city: "Minsk",
            code2: "BY",
            code3: "BLR",
            latlng: [
                53,
                28
            ],
            flag: "🇧🇾"
        },
        {
            name: "Belgium",
            city: "Brussels",
            code2: "BE",
            code3: "BEL",
            latlng: [
                50.83333333,
                4
            ],
            flag: "🇧🇪"
        },
        {
            name: "Belize",
            city: "Belmopan",
            code2: "BZ",
            code3: "BLZ",
            latlng: [
                17.25,
                -88.75
            ],
            flag: "🇧🇿"
        },
        {
            name: "Benin",
            city: "Porto-Novo",
            code2: "BJ",
            code3: "BEN",
            latlng: [
                9.5,
                2.25
            ],
            flag: "🇧🇯"
        },
        {
            name: "Bermuda",
            city: "Hamilton",
            code2: "BM",
            code3: "BMU",
            latlng: [
                32.33333333,
                -64.75
            ],
            flag: "🇧🇲"
        },
        {
            name: "Bhutan",
            city: "Thimphu",
            code2: "BT",
            code3: "BTN",
            latlng: [
                27.5,
                90.5
            ],
            flag: "🇧🇹"
        },
        {
            name: "Bolivia (Plurinational State of)",
            city: "Sucre",
            code2: "BO",
            code3: "BOL",
            latlng: [
                -17,
                -65
            ],
            flag: "🇧🇴"
        },
        {
            name: "Bonaire, Sint Eustatius and Saba",
            city: "Kralendijk",
            code2: "BQ",
            code3: "BES",
            latlng: [
                12.15,
                -68.266667
            ],
            flag: "🇧🇶"
        },
        {
            name: "Bosnia and Herzegovina",
            city: "Sarajevo",
            code2: "BA",
            code3: "BIH",
            latlng: [
                44,
                18
            ],
            flag: "🇧🇦"
        },
        {
            name: "Botswana",
            city: "Gaborone",
            code2: "BW",
            code3: "BWA",
            latlng: [
                -22,
                24
            ],
            flag: "🇧🇼"
        },
        {
            name: "Bouvet Island",
            city: "",
            code2: "BV",
            code3: "BVT",
            latlng: [
                -54.43333333,
                3.4
            ],
            flag: "🇧🇻"
        },
        {
            name: "Brazil",
            city: "Brasília",
            code2: "BR",
            code3: "BRA",
            latlng: [
                -10,
                -55
            ],
            flag: "🇧🇷"
        },
        {
            name: "British Indian Ocean Territory",
            city: "Diego Garcia",
            code2: "IO",
            code3: "IOT",
            latlng: [
                -6,
                71.5
            ],
            flag: "🇮🇴"
        },
        {
            name: "United States Minor Outlying Islands",
            city: "",
            code2: "UM",
            code3: "UMI",
            latlng: [],
            flag: "🇺🇲"
        },
        {
            name: "Virgin Islands (British)",
            city: "Road Town",
            code2: "VG",
            code3: "VGB",
            latlng: [
                18.431383,
                -64.62305
            ],
            flag: "🇻🇬"
        },
        {
            name: "Virgin Islands (U.S.)",
            city: "Charlotte Amalie",
            code2: "VI",
            code3: "VIR",
            latlng: [
                18.34,
                -64.93
            ],
            flag: "🇻🇮"
        },
        {
            name: "Brunei Darussalam",
            city: "Bandar Seri Begawan",
            code2: "BN",
            code3: "BRN",
            latlng: [
                4.5,
                114.66666666
            ],
            flag: "🇧🇳"
        },
        {
            name: "Bulgaria",
            city: "Sofia",
            code2: "BG",
            code3: "BGR",
            latlng: [
                43,
                25
            ],
            flag: "🇧🇬"
        },
        {
            name: "Burkina Faso",
            city: "Ouagadougou",
            code2: "BF",
            code3: "BFA",
            latlng: [
                13,
                -2
            ],
            flag: "🇧🇫"
        },
        {
            name: "Burundi",
            city: "Gitega",
            code2: "BI",
            code3: "BDI",
            latlng: [
                -3.5,
                30
            ],
            flag: "🇧🇮"
        },
        {
            name: "Cambodia",
            city: "Phnom Penh",
            code2: "KH",
            code3: "KHM",
            latlng: [
                13,
                105
            ],
            flag: "🇰🇭"
        },
        {
            name: "Cameroon",
            city: "Yaoundé",
            code2: "CM",
            code3: "CMR",
            latlng: [
                6,
                12
            ],
            flag: "🇨🇲"
        },
        {
            name: "Canada",
            city: "Ottawa",
            code2: "CA",
            code3: "CAN",
            latlng: [
                60,
                -95
            ],
            flag: "🇨🇦"
        },
        {
            name: "Cabo Verde",
            city: "Praia",
            code2: "CV",
            code3: "CPV",
            latlng: [
                16,
                -24
            ],
            flag: "🇨🇻"
        },
        {
            name: "Cayman Islands",
            city: "George Town",
            code2: "KY",
            code3: "CYM",
            latlng: [
                19.5,
                -80.5
            ],
            flag: "🇰🇾"
        },
        {
            name: "Central African Republic",
            city: "Bangui",
            code2: "CF",
            code3: "CAF",
            latlng: [
                7,
                21
            ],
            flag: "🇨🇫"
        },
        {
            name: "Chad",
            city: "N'Djamena",
            code2: "TD",
            code3: "TCD",
            latlng: [
                15,
                19
            ],
            flag: "🇹🇩"
        },
        {
            name: "Chile",
            city: "Santiago",
            code2: "CL",
            code3: "CHL",
            latlng: [
                -30,
                -71
            ],
            flag: "🇨🇱"
        },
        {
            name: "China",
            city: "Beijing",
            code2: "CN",
            code3: "CHN",
            latlng: [
                35,
                105
            ],
            flag: "🇨🇳"
        },
        {
            name: "Christmas Island",
            city: "Flying Fish Cove",
            code2: "CX",
            code3: "CXR",
            latlng: [
                -10.5,
                105.66666666
            ],
            flag: "🇨🇽"
        },
        {
            name: "Cocos (Keeling) Islands",
            city: "West Island",
            code2: "CC",
            code3: "CCK",
            latlng: [
                -12.5,
                96.83333333
            ],
            flag: "🇨🇨"
        },
        {
            name: "Colombia",
            city: "Bogotá",
            code2: "CO",
            code3: "COL",
            latlng: [
                4,
                -72
            ],
            flag: "🇨🇴"
        },
        {
            name: "Comoros",
            city: "Moroni",
            code2: "KM",
            code3: "COM",
            latlng: [
                -12.16666666,
                44.25
            ],
            flag: "🇰🇲"
        },
        {
            name: "Congo",
            city: "Brazzaville",
            code2: "CG",
            code3: "COG",
            latlng: [
                -1,
                15
            ],
            flag: "🇨🇬"
        },
        {
            name: "Congo (Democratic Republic of the)",
            city: "Kinshasa",
            code2: "CD",
            code3: "COD",
            latlng: [
                0,
                25
            ],
            flag: "🇨🇩"
        },
        {
            name: "Cook Islands",
            city: "Avarua",
            code2: "CK",
            code3: "COK",
            latlng: [
                -21.23333333,
                -159.76666666
            ],
            flag: "🇨🇰"
        },
        {
            name: "Costa Rica",
            city: "San José",
            code2: "CR",
            code3: "CRI",
            latlng: [
                10,
                -84
            ],
            flag: "🇨🇷"
        },
        {
            name: "Croatia",
            city: "Zagreb",
            code2: "HR",
            code3: "HRV",
            latlng: [
                45.16666666,
                15.5
            ],
            flag: "🇭🇷"
        },
        {
            name: "Cuba",
            city: "Havana",
            code2: "CU",
            code3: "CUB",
            latlng: [
                21.5,
                -80
            ],
            flag: "🇨🇺"
        },
        {
            name: "Curaçao",
            city: "Willemstad",
            code2: "CW",
            code3: "CUW",
            latlng: [
                12.116667,
                -68.933333
            ],
            flag: "🇨🇼"
        },
        {
            name: "Cyprus",
            city: "Nicosia",
            code2: "CY",
            code3: "CYP",
            latlng: [
                35,
                33
            ],
            flag: "🇨🇾"
        },
        {
            name: "Czech Republic",
            city: "Prague",
            code2: "CZ",
            code3: "CZE",
            latlng: [
                49.75,
                15.5
            ],
            flag: "🇨🇿"
        },
        {
            name: "Denmark",
            city: "Copenhagen",
            code2: "DK",
            code3: "DNK",
            latlng: [
                56,
                10
            ],
            flag: "🇩🇰"
        },
        {
            name: "Djibouti",
            city: "Djibouti",
            code2: "DJ",
            code3: "DJI",
            latlng: [
                11.5,
                43
            ],
            flag: "🇩🇯"
        },
        {
            name: "Dominica",
            city: "Roseau",
            code2: "DM",
            code3: "DMA",
            latlng: [
                15.41666666,
                -61.33333333
            ],
            flag: "🇩🇲"
        },
        {
            name: "Dominican Republic",
            city: "Santo Domingo",
            code2: "DO",
            code3: "DOM",
            latlng: [
                19,
                -70.66666666
            ],
            flag: "🇩🇴"
        },
        {
            name: "Ecuador",
            city: "Quito",
            code2: "EC",
            code3: "ECU",
            latlng: [
                -2,
                -77.5
            ],
            flag: "🇪🇨"
        },
        {
            name: "Egypt",
            city: "Cairo",
            code2: "EG",
            code3: "EGY",
            latlng: [
                27,
                30
            ],
            flag: "🇪🇬"
        },
        {
            name: "El Salvador",
            city: "San Salvador",
            code2: "SV",
            code3: "SLV",
            latlng: [
                13.83333333,
                -88.91666666
            ],
            flag: "🇸🇻"
        },
        {
            name: "Equatorial Guinea",
            city: "Malabo",
            code2: "GQ",
            code3: "GNQ",
            latlng: [
                2,
                10
            ],
            flag: "🇬🇶"
        },
        {
            name: "Eritrea",
            city: "Asmara",
            code2: "ER",
            code3: "ERI",
            latlng: [
                15,
                39
            ],
            flag: "🇪🇷"
        },
        {
            name: "Estonia",
            city: "Tallinn",
            code2: "EE",
            code3: "EST",
            latlng: [
                59,
                26
            ],
            flag: "🇪🇪"
        },
        {
            name: "Ethiopia",
            city: "Addis Ababa",
            code2: "ET",
            code3: "ETH",
            latlng: [
                8,
                38
            ],
            flag: "🇪🇹"
        },
        {
            name: "Falkland Islands (Malvinas)",
            city: "Stanley",
            code2: "FK",
            code3: "FLK",
            latlng: [
                -51.75,
                -59
            ],
            flag: "🇫🇰"
        },
        {
            name: "Faroe Islands",
            city: "Tórshavn",
            code2: "FO",
            code3: "FRO",
            latlng: [
                62,
                -7
            ],
            flag: "🇫🇴"
        },
        {
            name: "Fiji",
            city: "Suva",
            code2: "FJ",
            code3: "FJI",
            latlng: [
                -18,
                175
            ],
            flag: "🇫🇯"
        },
        {
            name: "Finland",
            city: "Helsinki",
            code2: "FI",
            code3: "FIN",
            latlng: [
                64,
                26
            ],
            flag: "🇫🇮"
        },
        {
            name: "France",
            city: "Paris",
            code2: "FR",
            code3: "FRA",
            latlng: [
                46,
                2
            ],
            flag: "🇫🇷"
        },
        {
            name: "French Guiana",
            city: "Cayenne",
            code2: "GF",
            code3: "GUF",
            latlng: [
                4,
                -53
            ],
            flag: "🇬🇫"
        },
        {
            name: "French Polynesia",
            city: "Papeetē",
            code2: "PF",
            code3: "PYF",
            latlng: [
                -15,
                -140
            ],
            flag: "🇵🇫"
        },
        {
            name: "French Southern Territories",
            city: "Port-aux-Français",
            code2: "TF",
            code3: "ATF",
            latlng: [
                -49.25,
                69.167
            ],
            flag: "🇹🇫"
        },
        {
            name: "Gabon",
            city: "Libreville",
            code2: "GA",
            code3: "GAB",
            latlng: [
                -1,
                11.75
            ],
            flag: "🇬🇦"
        },
        {
            name: "Gambia",
            city: "Banjul",
            code2: "GM",
            code3: "GMB",
            latlng: [
                13.46666666,
                -16.56666666
            ],
            flag: "🇬🇲"
        },
        {
            name: "Georgia",
            city: "Tbilisi",
            code2: "GE",
            code3: "GEO",
            latlng: [
                42,
                43.5
            ],
            flag: "🇬🇪"
        },
        {
            name: "Germany",
            city: "Berlin",
            code2: "DE",
            code3: "DEU",
            latlng: [
                51,
                9
            ],
            flag: "🇩🇪"
        },
        {
            name: "Ghana",
            city: "Accra",
            code2: "GH",
            code3: "GHA",
            latlng: [
                8,
                -2
            ],
            flag: "🇬🇭"
        },
        {
            name: "Gibraltar",
            city: "Gibraltar",
            code2: "GI",
            code3: "GIB",
            latlng: [
                36.13333333,
                -5.35
            ],
            flag: "🇬🇮"
        },
        {
            name: "Greece",
            city: "Athens",
            code2: "GR",
            code3: "GRC",
            latlng: [
                39,
                22
            ],
            flag: "🇬🇷"
        },
        {
            name: "Greenland",
            city: "Nuuk",
            code2: "GL",
            code3: "GRL",
            latlng: [
                72,
                -40
            ],
            flag: "🇬🇱"
        },
        {
            name: "Grenada",
            city: "St. George's",
            code2: "GD",
            code3: "GRD",
            latlng: [
                12.11666666,
                -61.66666666
            ],
            flag: "🇬🇩"
        },
        {
            name: "Guadeloupe",
            city: "Basse-Terre",
            code2: "GP",
            code3: "GLP",
            latlng: [
                16.25,
                -61.583333
            ],
            flag: "🇬🇵"
        },
        {
            name: "Guam",
            city: "Hagåtña",
            code2: "GU",
            code3: "GUM",
            latlng: [
                13.46666666,
                144.78333333
            ],
            flag: "🇬🇺"
        },
        {
            name: "Guatemala",
            city: "Guatemala City",
            code2: "GT",
            code3: "GTM",
            latlng: [
                15.5,
                -90.25
            ],
            flag: "🇬🇹"
        },
        {
            name: "Guernsey",
            city: "St. Peter Port",
            code2: "GG",
            code3: "GGY",
            latlng: [
                49.46666666,
                -2.58333333
            ],
            flag: "🇬🇬"
        },
        {
            name: "Guinea",
            city: "Conakry",
            code2: "GN",
            code3: "GIN",
            latlng: [
                11,
                -10
            ],
            flag: "🇬🇳"
        },
        {
            name: "Guinea-Bissau",
            city: "Bissau",
            code2: "GW",
            code3: "GNB",
            latlng: [
                12,
                -15
            ],
            flag: "🇬🇼"
        },
        {
            name: "Guyana",
            city: "Georgetown",
            code2: "GY",
            code3: "GUY",
            latlng: [
                5,
                -59
            ],
            flag: "🇬🇾"
        },
        {
            name: "Haiti",
            city: "Port-au-Prince",
            code2: "HT",
            code3: "HTI",
            latlng: [
                19,
                -72.41666666
            ],
            flag: "🇭🇹"
        },
        {
            name: "Heard Island and McDonald Islands",
            city: "",
            code2: "HM",
            code3: "HMD",
            latlng: [
                -53.1,
                72.51666666
            ],
            flag: "🇭🇲"
        },
        {
            name: "Vatican City",
            city: "Vatican City",
            code2: "VA",
            code3: "VAT",
            latlng: [
                41.9,
                12.45
            ],
            flag: "🇻🇦"
        },
        {
            name: "Honduras",
            city: "Tegucigalpa",
            code2: "HN",
            code3: "HND",
            latlng: [
                15,
                -86.5
            ],
            flag: "🇭🇳"
        },
        {
            name: "Hong Kong",
            city: "City of Victoria",
            code2: "HK",
            code3: "HKG",
            latlng: [
                22.25,
                114.16666666
            ],
            flag: "🇭🇰"
        },
        {
            name: "Hungary",
            city: "Budapest",
            code2: "HU",
            code3: "HUN",
            latlng: [
                47,
                20
            ],
            flag: "🇭🇺"
        },
        {
            name: "Iceland",
            city: "Reykjavík",
            code2: "IS",
            code3: "ISL",
            latlng: [
                65,
                -18
            ],
            flag: "🇮🇸"
        },
        {
            name: "India",
            city: "New Delhi",
            code2: "IN",
            code3: "IND",
            latlng: [
                20,
                77
            ],
            flag: "🇮🇳"
        },
        {
            name: "Indonesia",
            city: "Jakarta",
            code2: "ID",
            code3: "IDN",
            latlng: [
                -5,
                120
            ],
            flag: "🇮🇩"
        },
        {
            name: "Côte d'Ivoire",
            city: "Yamoussoukro",
            code2: "CI",
            code3: "CIV",
            latlng: [
                8,
                -5
            ],
            flag: "🇨🇮"
        },
        {
            name: "Iran (Islamic Republic of)",
            city: "Tehran",
            code2: "IR",
            code3: "IRN",
            latlng: [
                32,
                53
            ],
            flag: "🇮🇷"
        },
        {
            name: "Iraq",
            city: "Baghdad",
            code2: "IQ",
            code3: "IRQ",
            latlng: [
                33,
                44
            ],
            flag: "🇮🇶"
        },
        {
            name: "Ireland",
            city: "Dublin",
            code2: "IE",
            code3: "IRL",
            latlng: [
                53,
                -8
            ],
            flag: "🇮🇪"
        },
        {
            name: "Isle of Man",
            city: "Douglas",
            code2: "IM",
            code3: "IMN",
            latlng: [
                54.25,
                -4.5
            ],
            flag: "🇮🇲"
        },
        {
            name: "Israel",
            city: "Jerusalem",
            code2: "IL",
            code3: "ISR",
            latlng: [
                31.5,
                34.75
            ],
            flag: "🇮🇱"
        },
        {
            name: "Italy",
            city: "Rome",
            code2: "IT",
            code3: "ITA",
            latlng: [
                42.83333333,
                12.83333333
            ],
            flag: "🇮🇹"
        },
        {
            name: "Jamaica",
            city: "Kingston",
            code2: "JM",
            code3: "JAM",
            latlng: [
                18.25,
                -77.5
            ],
            flag: "🇯🇲"
        },
        {
            name: "Japan",
            city: "Tokyo",
            code2: "JP",
            code3: "JPN",
            latlng: [
                36,
                138
            ],
            flag: "🇯🇵"
        },
        {
            name: "Jersey",
            city: "Saint Helier",
            code2: "JE",
            code3: "JEY",
            latlng: [
                49.25,
                -2.16666666
            ],
            flag: "🇯🇪"
        },
        {
            name: "Jordan",
            city: "Amman",
            code2: "JO",
            code3: "JOR",
            latlng: [
                31,
                36
            ],
            flag: "🇯🇴"
        },
        {
            name: "Kazakhstan",
            city: "Nur-Sultan",
            code2: "KZ",
            code3: "KAZ",
            latlng: [
                48,
                68
            ],
            flag: "🇰🇿"
        },
        {
            name: "Kenya",
            city: "Nairobi",
            code2: "KE",
            code3: "KEN",
            latlng: [
                1,
                38
            ],
            flag: "🇰🇪"
        },
        {
            name: "Kiribati",
            city: "South Tarawa",
            code2: "KI",
            code3: "KIR",
            latlng: [
                1.41666666,
                173
            ],
            flag: "🇰🇮"
        },
        {
            name: "Kuwait",
            city: "Kuwait City",
            code2: "KW",
            code3: "KWT",
            latlng: [
                29.5,
                45.75
            ],
            flag: "🇰🇼"
        },
        {
            name: "Kyrgyzstan",
            city: "Bishkek",
            code2: "KG",
            code3: "KGZ",
            latlng: [
                41,
                75
            ],
            flag: "🇰🇬"
        },
        {
            name: "Lao People's Democratic Republic",
            city: "Vientiane",
            code2: "LA",
            code3: "LAO",
            latlng: [
                18,
                105
            ],
            flag: "🇱🇦"
        },
        {
            name: "Latvia",
            city: "Riga",
            code2: "LV",
            code3: "LVA",
            latlng: [
                57,
                25
            ],
            flag: "🇱🇻"
        },
        {
            name: "Lebanon",
            city: "Beirut",
            code2: "LB",
            code3: "LBN",
            latlng: [
                33.83333333,
                35.83333333
            ],
            flag: "🇱🇧"
        },
        {
            name: "Lesotho",
            city: "Maseru",
            code2: "LS",
            code3: "LSO",
            latlng: [
                -29.5,
                28.5
            ],
            flag: "🇱🇸"
        },
        {
            name: "Liberia",
            city: "Monrovia",
            code2: "LR",
            code3: "LBR",
            latlng: [
                6.5,
                -9.5
            ],
            flag: "🇱🇷"
        },
        {
            name: "Libya",
            city: "Tripoli",
            code2: "LY",
            code3: "LBY",
            latlng: [
                25,
                17
            ],
            flag: "🇱🇾"
        },
        {
            name: "Liechtenstein",
            city: "Vaduz",
            code2: "LI",
            code3: "LIE",
            latlng: [
                47.26666666,
                9.53333333
            ],
            flag: "🇱🇮"
        },
        {
            name: "Lithuania",
            city: "Vilnius",
            code2: "LT",
            code3: "LTU",
            latlng: [
                56,
                24
            ],
            flag: "🇱🇹"
        },
        {
            name: "Luxembourg",
            city: "Luxembourg",
            code2: "LU",
            code3: "LUX",
            latlng: [
                49.75,
                6.16666666
            ],
            flag: "🇱🇺"
        },
        {
            name: "Macao",
            city: "",
            code2: "MO",
            code3: "MAC",
            latlng: [
                22.16666666,
                113.55
            ],
            flag: "🇲🇴"
        },
        {
            name: "North Macedonia",
            city: "Skopje",
            code2: "MK",
            code3: "MKD",
            latlng: [
                41.83333333,
                22
            ],
            flag: "🇲🇰"
        },
        {
            name: "Madagascar",
            city: "Antananarivo",
            code2: "MG",
            code3: "MDG",
            latlng: [
                -20,
                47
            ],
            flag: "🇲🇬"
        },
        {
            name: "Malawi",
            city: "Lilongwe",
            code2: "MW",
            code3: "MWI",
            latlng: [
                -13.5,
                34
            ],
            flag: "🇲🇼"
        },
        {
            name: "Malaysia",
            city: "Kuala Lumpur",
            code2: "MY",
            code3: "MYS",
            latlng: [
                2.5,
                112.5
            ],
            flag: "🇲🇾"
        },
        {
            name: "Maldives",
            city: "Malé",
            code2: "MV",
            code3: "MDV",
            latlng: [
                3.25,
                73
            ],
            flag: "🇲🇻"
        },
        {
            name: "Mali",
            city: "Bamako",
            code2: "ML",
            code3: "MLI",
            latlng: [
                17,
                -4
            ],
            flag: "🇲🇱"
        },
        {
            name: "Malta",
            city: "Valletta",
            code2: "MT",
            code3: "MLT",
            latlng: [
                35.83333333,
                14.58333333
            ],
            flag: "🇲🇹"
        },
        {
            name: "Marshall Islands",
            city: "Majuro",
            code2: "MH",
            code3: "MHL",
            latlng: [
                9,
                168
            ],
            flag: "🇲🇭"
        },
        {
            name: "Martinique",
            city: "Fort-de-France",
            code2: "MQ",
            code3: "MTQ",
            latlng: [
                14.666667,
                -61
            ],
            flag: "🇲🇶"
        },
        {
            name: "Mauritania",
            city: "Nouakchott",
            code2: "MR",
            code3: "MRT",
            latlng: [
                20,
                -12
            ],
            flag: "🇲🇷"
        },
        {
            name: "Mauritius",
            city: "Port Louis",
            code2: "MU",
            code3: "MUS",
            latlng: [
                -20.28333333,
                57.55
            ],
            flag: "🇲🇺"
        },
        {
            name: "Mayotte",
            city: "Mamoudzou",
            code2: "YT",
            code3: "MYT",
            latlng: [
                -12.83333333,
                45.16666666
            ],
            flag: "🇾🇹"
        },
        {
            name: "Mexico",
            city: "Mexico City",
            code2: "MX",
            code3: "MEX",
            latlng: [
                23,
                -102
            ],
            flag: "🇲🇽"
        },
        {
            name: "Micronesia (Federated States of)",
            city: "Palikir",
            code2: "FM",
            code3: "FSM",
            latlng: [
                6.91666666,
                158.25
            ],
            flag: "🇫🇲"
        },
        {
            name: "Moldova (Republic of)",
            city: "Chișinău",
            code2: "MD",
            code3: "MDA",
            latlng: [
                47,
                29
            ],
            flag: "🇲🇩"
        },
        {
            name: "Monaco",
            city: "Monaco",
            code2: "MC",
            code3: "MCO",
            latlng: [
                43.73333333,
                7.4
            ],
            flag: "🇲🇨"
        },
        {
            name: "Mongolia",
            city: "Ulan Bator",
            code2: "MN",
            code3: "MNG",
            latlng: [
                46,
                105
            ],
            flag: "🇲🇳"
        },
        {
            name: "Montserrat",
            city: "Plymouth",
            code2: "MS",
            code3: "MSR",
            latlng: [
                16.75,
                -62.2
            ],
            flag: "🇲🇸"
        },
        {
            name: "Morocco",
            city: "Rabat",
            code2: "MA",
            code3: "MAR",
            latlng: [
                32,
                -5
            ],
            flag: "🇲🇦"
        },
        {
            name: "Mozambique",
            city: "Maputo",
            code2: "MZ",
            code3: "MOZ",
            latlng: [
                -18.25,
                35
            ],
            flag: "🇲🇿"
        },
        {
            name: "Myanmar",
            city: "Naypyidaw",
            code2: "MM",
            code3: "MMR",
            latlng: [
                22,
                98
            ],
            flag: "🇲🇲"
        },
        {
            name: "Namibia",
            city: "Windhoek",
            code2: "NA",
            code3: "NAM",
            latlng: [
                -22,
                17
            ],
            flag: "🇳🇦"
        },
        {
            name: "Nauru",
            city: "Yaren",
            code2: "NR",
            code3: "NRU",
            latlng: [
                -0.53333333,
                166.91666666
            ],
            flag: "🇳🇷"
        },
        {
            name: "Nepal",
            city: "Kathmandu",
            code2: "NP",
            code3: "NPL",
            latlng: [
                28,
                84
            ],
            flag: "🇳🇵"
        },
        {
            name: "Netherlands",
            city: "Amsterdam",
            code2: "NL",
            code3: "NLD",
            latlng: [
                52.5,
                5.75
            ],
            flag: "🇳🇱"
        },
        {
            name: "New Caledonia",
            city: "Nouméa",
            code2: "NC",
            code3: "NCL",
            latlng: [
                -21.5,
                165.5
            ],
            flag: "🇳🇨"
        },
        {
            name: "New Zealand",
            city: "Wellington",
            code2: "NZ",
            code3: "NZL",
            latlng: [
                -41,
                174
            ],
            flag: "🇳🇿"
        },
        {
            name: "Nicaragua",
            city: "Managua",
            code2: "NI",
            code3: "NIC",
            latlng: [
                13,
                -85
            ],
            flag: "🇳🇮"
        },
        {
            name: "Niger",
            city: "Niamey",
            code2: "NE",
            code3: "NER",
            latlng: [
                16,
                8
            ],
            flag: "🇳🇪"
        },
        {
            name: "Nigeria",
            city: "Abuja",
            code2: "NG",
            code3: "NGA",
            latlng: [
                10,
                8
            ],
            flag: "🇳🇬"
        },
        {
            name: "Niue",
            city: "Alofi",
            code2: "NU",
            code3: "NIU",
            latlng: [
                -19.03333333,
                -169.86666666
            ],
            flag: "🇳🇺"
        },
        {
            name: "Norfolk Island",
            city: "Kingston",
            code2: "NF",
            code3: "NFK",
            latlng: [
                -29.03333333,
                167.95
            ],
            flag: "🇳🇫"
        },
        {
            name: "Korea (Democratic People's Republic of)",
            city: "Pyongyang",
            code2: "KP",
            code3: "PRK",
            latlng: [
                40,
                127
            ],
            flag: "🇰🇵"
        },
        {
            name: "Northern Mariana Islands",
            city: "Saipan",
            code2: "MP",
            code3: "MNP",
            latlng: [
                15.2,
                145.75
            ],
            flag: "🇲🇵"
        },
        {
            name: "Norway",
            city: "Oslo",
            code2: "NO",
            code3: "NOR",
            latlng: [
                62,
                10
            ],
            flag: "🇳🇴"
        },
        {
            name: "Oman",
            city: "Muscat",
            code2: "OM",
            code3: "OMN",
            latlng: [
                21,
                57
            ],
            flag: "🇴🇲"
        },
        {
            name: "Pakistan",
            city: "Islamabad",
            code2: "PK",
            code3: "PAK",
            latlng: [
                30,
                70
            ],
            flag: "🇵🇰"
        },
        {
            name: "Palau",
            city: "Ngerulmud",
            code2: "PW",
            code3: "PLW",
            latlng: [
                7.5,
                134.5
            ],
            flag: "🇵🇼"
        },
        {
            name: "Palestine, State of",
            city: "Ramallah",
            code2: "PS",
            code3: "PSE",
            latlng: [
                31.9,
                35.2
            ],
            flag: "🇵🇸"
        },
        {
            name: "Panama",
            city: "Panama City",
            code2: "PA",
            code3: "PAN",
            latlng: [
                9,
                -80
            ],
            flag: "🇵🇦"
        },
        {
            name: "Papua New Guinea",
            city: "Port Moresby",
            code2: "PG",
            code3: "PNG",
            latlng: [
                -6,
                147
            ],
            flag: "🇵🇬"
        },
        {
            name: "Paraguay",
            city: "Asunción",
            code2: "PY",
            code3: "PRY",
            latlng: [
                -23,
                -58
            ],
            flag: "🇵🇾"
        },
        {
            name: "Peru",
            city: "Lima",
            code2: "PE",
            code3: "PER",
            latlng: [
                -10,
                -76
            ],
            flag: "🇵🇪"
        },
        {
            name: "Philippines",
            city: "Manila",
            code2: "PH",
            code3: "PHL",
            latlng: [
                13,
                122
            ],
            flag: "🇵🇭"
        },
        {
            name: "Pitcairn",
            city: "Adamstown",
            code2: "PN",
            code3: "PCN",
            latlng: [
                -25.06666666,
                -130.1
            ],
            flag: "🇵🇳"
        },
        {
            name: "Poland",
            city: "Warsaw",
            code2: "PL",
            code3: "POL",
            latlng: [
                52,
                20
            ],
            flag: "🇵🇱"
        },
        {
            name: "Portugal",
            city: "Lisbon",
            code2: "PT",
            code3: "PRT",
            latlng: [
                39.5,
                -8
            ],
            flag: "🇵🇹"
        },
        {
            name: "Puerto Rico",
            city: "San Juan",
            code2: "PR",
            code3: "PRI",
            latlng: [
                18.25,
                -66.5
            ],
            flag: "🇵🇷"
        },
        {
            name: "Qatar",
            city: "Doha",
            code2: "QA",
            code3: "QAT",
            latlng: [
                25.5,
                51.25
            ],
            flag: "🇶🇦"
        },
        {
            name: "Republic of Kosovo",
            city: "Pristina",
            code2: "XK",
            code3: "UNK",
            latlng: [
                42.666667,
                21.166667
            ],
            flag: "🇽🇰"
        },
        {
            name: "Réunion",
            city: "Saint-Denis",
            code2: "RE",
            code3: "REU",
            latlng: [
                -21.15,
                55.5
            ],
            flag: "🇷🇪"
        },
        {
            name: "Romania",
            city: "Bucharest",
            code2: "RO",
            code3: "ROU",
            latlng: [
                46,
                25
            ],
            flag: "🇷🇴"
        },
        {
            name: "Russian Federation",
            city: "Moscow",
            code2: "RU",
            code3: "RUS",
            latlng: [
                60,
                100
            ],
            flag: "🇷🇺"
        },
        {
            name: "Rwanda",
            city: "Kigali",
            code2: "RW",
            code3: "RWA",
            latlng: [
                -2,
                30
            ],
            flag: "🇷🇼"
        },
        {
            name: "Saint Barthélemy",
            city: "Gustavia",
            code2: "BL",
            code3: "BLM",
            latlng: [
                18.5,
                -63.41666666
            ],
            flag: "🇧🇱"
        },
        {
            name: "Saint Helena, Ascension and Tristan da Cunha",
            city: "Jamestown",
            code2: "SH",
            code3: "SHN",
            latlng: [
                -15.95,
                -5.7
            ],
            flag: "🇸🇭"
        },
        {
            name: "Saint Kitts and Nevis",
            city: "Basseterre",
            code2: "KN",
            code3: "KNA",
            latlng: [
                17.33333333,
                -62.75
            ],
            flag: "🇰🇳"
        },
        {
            name: "Saint Lucia",
            city: "Castries",
            code2: "LC",
            code3: "LCA",
            latlng: [
                13.88333333,
                -60.96666666
            ],
            flag: "🇱🇨"
        },
        {
            name: "Saint Martin (French part)",
            city: "Marigot",
            code2: "MF",
            code3: "MAF",
            latlng: [
                18.08333333,
                -63.95
            ],
            flag: "🇲🇫"
        },
        {
            name: "Saint Pierre and Miquelon",
            city: "Saint-Pierre",
            code2: "PM",
            code3: "SPM",
            latlng: [
                46.83333333,
                -56.33333333
            ],
            flag: "🇵🇲"
        },
        {
            name: "Saint Vincent and the Grenadines",
            city: "Kingstown",
            code2: "VC",
            code3: "VCT",
            latlng: [
                13.25,
                -61.2
            ],
            flag: "🇻🇨"
        },
        {
            name: "Samoa",
            city: "Apia",
            code2: "WS",
            code3: "WSM",
            latlng: [
                -13.58333333,
                -172.33333333
            ],
            flag: "🇼🇸"
        },
        {
            name: "San Marino",
            city: "City of San Marino",
            code2: "SM",
            code3: "SMR",
            latlng: [
                43.76666666,
                12.41666666
            ],
            flag: "🇸🇲"
        },
        {
            name: "Sao Tome and Principe",
            city: "São Tomé",
            code2: "ST",
            code3: "STP",
            latlng: [
                1,
                7
            ],
            flag: "🇸🇹"
        },
        {
            name: "Saudi Arabia",
            city: "Riyadh",
            code2: "SA",
            code3: "SAU",
            latlng: [
                25,
                45
            ],
            flag: "🇸🇦"
        },
        {
            name: "Senegal",
            city: "Dakar",
            code2: "SN",
            code3: "SEN",
            latlng: [
                14,
                -14
            ],
            flag: "🇸🇳"
        },
        {
            name: "Serbia",
            city: "Belgrade",
            code2: "RS",
            code3: "SRB",
            latlng: [
                44,
                21
            ],
            flag: "🇷🇸"
        },
        {
            name: "Seychelles",
            city: "Victoria",
            code2: "SC",
            code3: "SYC",
            latlng: [
                -4.58333333,
                55.66666666
            ],
            flag: "🇸🇨"
        },
        {
            name: "Sierra Leone",
            city: "Freetown",
            code2: "SL",
            code3: "SLE",
            latlng: [
                8.5,
                -11.5
            ],
            flag: "🇸🇱"
        },
        {
            name: "Singapore",
            city: "Singapore",
            code2: "SG",
            code3: "SGP",
            latlng: [
                1.36666666,
                103.8
            ],
            flag: "🇸🇬"
        },
        {
            name: "Sint Maarten (Dutch part)",
            city: "Philipsburg",
            code2: "SX",
            code3: "SXM",
            latlng: [
                18.033333,
                -63.05
            ],
            flag: "🇸🇽"
        },
        {
            name: "Slovakia",
            city: "Bratislava",
            code2: "SK",
            code3: "SVK",
            latlng: [
                48.66666666,
                19.5
            ],
            flag: "🇸🇰"
        },
        {
            name: "Slovenia",
            city: "Ljubljana",
            code2: "SI",
            code3: "SVN",
            latlng: [
                46.11666666,
                14.81666666
            ],
            flag: "🇸🇮"
        },
        {
            name: "Solomon Islands",
            city: "Honiara",
            code2: "SB",
            code3: "SLB",
            latlng: [
                -8,
                159
            ],
            flag: "🇸🇧"
        },
        {
            name: "Somalia",
            city: "Mogadishu",
            code2: "SO",
            code3: "SOM",
            latlng: [
                10,
                49
            ],
            flag: "🇸🇴"
        },
        {
            name: "South Africa",
            city: "Pretoria",
            code2: "ZA",
            code3: "ZAF",
            latlng: [
                -29,
                24
            ],
            flag: "🇿🇦"
        },
        {
            name: "South Georgia and the South Sandwich Islands",
            city: "King Edward Point",
            code2: "GS",
            code3: "SGS",
            latlng: [
                -54.5,
                -37
            ],
            flag: "🇬🇸"
        },
        {
            name: "Korea (Republic of)",
            city: "Seoul",
            code2: "KR",
            code3: "KOR",
            latlng: [
                37,
                127.5
            ],
            flag: "🇰🇷"
        },
        {
            name: "South Sudan",
            city: "Juba",
            code2: "SS",
            code3: "SSD",
            latlng: [
                7,
                30
            ],
            flag: "🇸🇸"
        },
        {
            name: "Spain",
            city: "Madrid",
            code2: "ES",
            code3: "ESP",
            latlng: [
                40,
                -4
            ],
            flag: "🇪🇸"
        },
        {
            name: "Sri Lanka",
            city: "Sri Jayawardenepura Kotte",
            code2: "LK",
            code3: "LKA",
            latlng: [
                7,
                81
            ],
            flag: "🇱🇰"
        },
        {
            name: "Sudan",
            city: "Khartoum",
            code2: "SD",
            code3: "SDN",
            latlng: [
                15,
                30
            ],
            flag: "🇸🇩"
        },
        {
            name: "Suriname",
            city: "Paramaribo",
            code2: "SR",
            code3: "SUR",
            latlng: [
                4,
                -56
            ],
            flag: "🇸🇷"
        },
        {
            name: "Svalbard and Jan Mayen",
            city: "Longyearbyen",
            code2: "SJ",
            code3: "SJM",
            latlng: [
                78,
                20
            ],
            flag: "🇸🇯"
        },
        {
            name: "Eswatini",
            city: "Mbabane",
            code2: "SZ",
            code3: "SWZ",
            latlng: [
                -26.5,
                31.5
            ],
            flag: "🇸🇿"
        },
        {
            name: "Sweden",
            city: "Stockholm",
            code2: "SE",
            code3: "SWE",
            latlng: [
                62,
                15
            ],
            flag: "🇸🇪"
        },
        {
            name: "Switzerland",
            city: "Bern",
            code2: "CH",
            code3: "CHE",
            latlng: [
                47,
                8
            ],
            flag: "🇨🇭"
        },
        {
            name: "Syrian Arab Republic",
            city: "Damascus",
            code2: "SY",
            code3: "SYR",
            latlng: [
                35,
                38
            ],
            flag: "🇸🇾"
        },
        {
            name: "Taiwan",
            city: "Taipei",
            code2: "TW",
            code3: "TWN",
            latlng: [
                23.5,
                121
            ],
            flag: "🇹🇼"
        },
        {
            name: "Tajikistan",
            city: "Dushanbe",
            code2: "TJ",
            code3: "TJK",
            latlng: [
                39,
                71
            ],
            flag: "🇹🇯"
        },
        {
            name: "Tanzania, United Republic of",
            city: "Dodoma",
            code2: "TZ",
            code3: "TZA",
            latlng: [
                -6,
                35
            ],
            flag: "🇹🇿"
        },
        {
            name: "Thailand",
            city: "Bangkok",
            code2: "TH",
            code3: "THA",
            latlng: [
                15,
                100
            ],
            flag: "🇹🇭"
        },
        {
            name: "Timor-Leste",
            city: "Dili",
            code2: "TL",
            code3: "TLS",
            latlng: [
                -8.83333333,
                125.91666666
            ],
            flag: "🇹🇱"
        },
        {
            name: "Togo",
            city: "Lomé",
            code2: "TG",
            code3: "TGO",
            latlng: [
                8,
                1.16666666
            ],
            flag: "🇹🇬"
        },
        {
            name: "Tokelau",
            city: "Fakaofo",
            code2: "TK",
            code3: "TKL",
            latlng: [
                -9,
                -172
            ],
            flag: "🇹🇰"
        },
        {
            name: "Tonga",
            city: "Nuku'alofa",
            code2: "TO",
            code3: "TON",
            latlng: [
                -20,
                -175
            ],
            flag: "🇹🇴"
        },
        {
            name: "Trinidad and Tobago",
            city: "Port of Spain",
            code2: "TT",
            code3: "TTO",
            latlng: [
                11,
                -61
            ],
            flag: "🇹🇹"
        },
        {
            name: "Tunisia",
            city: "Tunis",
            code2: "TN",
            code3: "TUN",
            latlng: [
                34,
                9
            ],
            flag: "🇹🇳"
        },
        {
            name: "Turkey",
            city: "Ankara",
            code2: "TR",
            code3: "TUR",
            latlng: [
                39,
                35
            ],
            flag: "🇹🇷"
        },
        {
            name: "Turkmenistan",
            city: "Ashgabat",
            code2: "TM",
            code3: "TKM",
            latlng: [
                40,
                60
            ],
            flag: "🇹🇲"
        },
        {
            name: "Turks and Caicos Islands",
            city: "Cockburn Town",
            code2: "TC",
            code3: "TCA",
            latlng: [
                21.75,
                -71.58333333
            ],
            flag: "🇹🇨"
        },
        {
            name: "Tuvalu",
            city: "Funafuti",
            code2: "TV",
            code3: "TUV",
            latlng: [
                -8,
                178
            ],
            flag: "🇹🇻"
        },
        {
            name: "Uganda",
            city: "Kampala",
            code2: "UG",
            code3: "UGA",
            latlng: [
                1,
                32
            ],
            flag: "🇺🇬"
        },
        {
            name: "Ukraine",
            city: "Kyiv",
            code2: "UA",
            code3: "UKR",
            latlng: [
                49,
                32
            ],
            flag: "🇺🇦"
        },
        {
            name: "United Arab Emirates",
            city: "Abu Dhabi",
            code2: "AE",
            code3: "ARE",
            latlng: [
                24,
                54
            ],
            flag: "🇦🇪"
        },
        {
            name: "United Kingdom of Great Britain and Northern Ireland",
            city: "London",
            code2: "GB",
            code3: "GBR",
            latlng: [
                54,
                -2
            ],
            flag: "🇬🇧"
        },
        {
            name: "United States of America",
            city: "Washington, D.C.",
            code2: "US",
            code3: "USA",
            latlng: [
                38,
                -97
            ],
            flag: "🇺🇸"
        },
        {
            name: "Uruguay",
            city: "Montevideo",
            code2: "UY",
            code3: "URY",
            latlng: [
                -33,
                -56
            ],
            flag: "🇺🇾"
        },
        {
            name: "Uzbekistan",
            city: "Tashkent",
            code2: "UZ",
            code3: "UZB",
            latlng: [
                41,
                64
            ],
            flag: "🇺🇿"
        },
        {
            name: "Vanuatu",
            city: "Port Vila",
            code2: "VU",
            code3: "VUT",
            latlng: [
                -16,
                167
            ],
            flag: "🇻🇺"
        },
        {
            name: "Venezuela (Bolivarian Republic of)",
            city: "Caracas",
            code2: "VE",
            code3: "VEN",
            latlng: [
                8,
                -66
            ],
            flag: "🇻🇪"
        },
        {
            name: "Vietnam",
            city: "Hanoi",
            code2: "VN",
            code3: "VNM",
            latlng: [
                16.16666666,
                107.83333333
            ],
            flag: "🇻🇳"
        },
        {
            name: "Wallis and Futuna",
            city: "Mata-Utu",
            code2: "WF",
            code3: "WLF",
            latlng: [
                -13.3,
                -176.2
            ],
            flag: "🇼🇫"
        },
        {
            name: "Western Sahara",
            city: "El Aaiún",
            code2: "EH",
            code3: "ESH",
            latlng: [
                24.5,
                -13
            ],
            flag: "🇪🇭"
        },
        {
            name: "Yemen",
            city: "Sana'a",
            code2: "YE",
            code3: "YEM",
            latlng: [
                15,
                48
            ],
            flag: "🇾🇪"
        },
        {
            name: "Zambia",
            city: "Lusaka",
            code2: "ZM",
            code3: "ZMB",
            latlng: [
                -15,
                30
            ],
            flag: "🇿🇲"
        },
        {
            name: "Zimbabwe",
            city: "Harare",
            code2: "ZW",
            code3: "ZWE",
            latlng: [
                -20,
                30
            ],
            flag: "🇿🇼"
        }
    ];
};

export const getLocationsCodes = () => {
    return getLocations().map((e) => {
        return e.code2;
    });
};

export const getDefaultLocation = () => {
    return getLocations().filter((e) => {
        return e.code2 === getDefaultLocationCode();
    })[0];
};
