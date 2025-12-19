import type { SearchResult, FieldOption, ComparatorOption, FieldOptionMap } from '~/types/search'

const comparatorOptionsCommon: ComparatorOption[] = [
  { label: 'contains', value: 'contains' },
  { label: 'does not contain', value: '!contains' },
  { label: 'is', value: 'is' },
  { label: 'is not', value: 'is_not' },
  { label: 'starts with', value: 'starts_with' },
  { label: 'ends with', value: 'ends_with' },
]

const comparatorOptionsArticle: ComparatorOption[] = [
  { label: 'violated', value: 'violated' },
  { label: 'applied', value: 'applied' },
  { label: 'not violated', value: '!violated' }
]

const comparatorOptionsApplicationNumber: ComparatorOption[] = [
  { label: 'equal', value: 'application-number-equal' },
  { label: 'not equal', value: '!application-number-equal' },
]

export const fieldOptionsRechtspraak: FieldOptionMap = {
  law_ref: { label: "Law Refernces", value: "law_ref", comparators: comparatorOptionsCommon },
  ecli: { label: "ECLI", value: "ecli", comparators: comparatorOptionsCommon }
}


export const fieldOptionsECHR: FieldOptionMap = {
  articles: { label: "Articles", value: "articles", comparators: comparatorOptionsArticle },
  application_number: { label: "Application Numbers", value: "application_number", comparators: comparatorOptionsApplicationNumber }
}
export const allResults: SearchResult[] = [
  {
    "id": "1000",
    "ecli": "ECLI:NL:GH:2021:4100",
    "date": "2021-12-19",
    "summary": "Decision on human rights violations in context of case 4100...",
    "domain": "International",
    "citations": 93
  },
  {
    "id": "1001",
    "ecli": "ECLI:ECHR:2023:9565",
    "date": "2023-06-12",
    "summary": "Judgment on intellectual property rights in context of case 9565...",
    "domain": "Criminal",
    "citations": 41
  },
  {
    "id": "1002",
    "ecli": "ECLI:NL:RB:2020:9817",
    "date": "2020-02-07",
    "summary": "Preliminary ruling on data protection in context of case 9817...",
    "domain": "Administrative",
    "citations": 17
  },
  {
    "id": "1003",
    "ecli": "ECLI:NL:RB:2020:0036",
    "date": "2020-04-13",
    "summary": "Interpretation of maritime law in context of case 0036...",
    "domain": "Administrative",
    "citations": 56
  },
  {
    "id": "1004",
    "ecli": "ECLI:EU:C:2020:3693",
    "date": "2020-05-04",
    "summary": "Ruling on environmental regulations compliance in context of case 3693...",
    "domain": "International",
    "citations": 16
  },
  {
    "id": "1005",
    "ecli": "ECLI:NL:RB:2024:5789",
    "date": "2024-07-17",
    "summary": "Advisory opinion on criminal procedure in context of case 5789...",
    "domain": "Constitutional",
    "citations": 3
  },
  {
    "id": "1006",
    "ecli": "ECLI:NL:GH:2022:8789",
    "date": "2022-12-12",
    "summary": "Decision on human rights violations in context of case 8789...",
    "domain": "International",
    "citations": 2
  },
  {
    "id": "1007",
    "ecli": "ECLI:EU:C:2020:9665",
    "date": "2020-09-25",
    "summary": "Ruling on antitrust and competition in context of case 9665...",
    "domain": "Administrative",
    "citations": 35
  },
  {
    "id": "1008",
    "ecli": "ECLI:NL:PHR:2022:6461",
    "date": "2022-10-18",
    "summary": "Judgment regarding consumer protection laws in context of case 6461...",
    "domain": "Civil",
    "citations": 25
  },
  {
    "id": "1009",
    "ecli": "ECLI:ECHR:2024:5294",
    "date": "2024-12-10",
    "summary": "Ruling on antitrust and competition in context of case 5294...",
    "domain": "Civil",
    "citations": 94
  },
  {
    "id": "1010",
    "ecli": "ECLI:EU:C:2024:0967",
    "date": "2024-05-04",
    "summary": "Decision regarding contract law interpretation in context of case 0967...",
    "domain": "International",
    "citations": 96
  },
  {
    "id": "1011",
    "ecli": "ECLI:NL:RB:2022:8050",
    "date": "2022-10-28",
    "summary": "Ruling on antitrust and competition in context of case 8050...",
    "domain": "Civil",
    "citations": 12
  },
  {
    "id": "1012",
    "ecli": "ECLI:NL:HR:2024:1898",
    "date": "2024-05-12",
    "summary": "Ruling on antitrust and competition in context of case 1898...",
    "domain": "Familial",
    "citations": 11
  },
  {
    "id": "1013",
    "ecli": "ECLI:NL:HR:2023:8281",
    "date": "2023-04-10",
    "summary": "Ruling on antitrust and competition in context of case 8281...",
    "domain": "Criminal",
    "citations": 76
  },
  {
    "id": "1014",
    "ecli": "ECLI:ECHR:2022:6371",
    "date": "2022-02-26",
    "summary": "Ruling on antitrust and competition in context of case 6371...",
    "domain": "Constitutional",
    "citations": 42
  },
  {
    "id": "1015",
    "ecli": "ECLI:NL:RB:2023:9249",
    "date": "2023-11-01",
    "summary": "Ruling on environmental regulations compliance in context of case 9249...",
    "domain": "Administrative",
    "citations": 41
  },
  {
    "id": "1016",
    "ecli": "ECLI:NL:HR:2021:7816",
    "date": "2021-07-15",
    "summary": "Judgment on intellectual property rights in context of case 7816...",
    "domain": "Criminal",
    "citations": 18
  },
  {
    "id": "1017",
    "ecli": "ECLI:NL:PHR:2023:8302",
    "date": "2023-09-19",
    "summary": "Decision on human rights violations in context of case 8302...",
    "domain": "Familial",
    "citations": 24
  },
  {
    "id": "1018",
    "ecli": "ECLI:NL:HR:2022:1515",
    "date": "2022-01-08",
    "summary": "Advisory opinion on criminal procedure in context of case 1515...",
    "domain": "Administrative",
    "citations": 77
  },
  {
    "id": "1019",
    "ecli": "ECLI:NL:GH:2023:5830",
    "date": "2023-10-05",
    "summary": "Judgment regarding consumer protection laws in context of case 5830...",
    "domain": "Criminal",
    "citations": 12
  },
  {
    "id": "1020",
    "ecli": "ECLI:NL:HR:2021:4741",
    "date": "2021-12-09",
    "summary": "Interpretation of maritime law in context of case 4741...",
    "domain": "Administrative",
    "citations": 83
  },
  {
    "id": "1021",
    "ecli": "ECLI:NL:RB:2021:3358",
    "date": "2021-08-15",
    "summary": "Case concerning labor law disputes in context of case 3358...",
    "domain": "International",
    "citations": 10
  },
  {
    "id": "1022",
    "ecli": "ECLI:NL:GH:2024:6137",
    "date": "2024-02-24",
    "summary": "Judgment on intellectual property rights in context of case 6137...",
    "domain": "Civil",
    "citations": 50
  },
  {
    "id": "1023",
    "ecli": "ECLI:ECHR:2020:8472",
    "date": "2020-06-07",
    "summary": "Judgment on intellectual property rights in context of case 8472...",
    "domain": "Civil",
    "citations": 1
  },
  {
    "id": "1024",
    "ecli": "ECLI:NL:RB:2024:3562",
    "date": "2024-02-05",
    "summary": "Interpretation of maritime law in context of case 3562...",
    "domain": "Civil",
    "citations": 79
  },
  {
    "id": "1025",
    "ecli": "ECLI:NL:GH:2022:8366",
    "date": "2022-08-04",
    "summary": "Case concerning labor law disputes in context of case 8366...",
    "domain": "Familial",
    "citations": 77
  },
  {
    "id": "1026",
    "ecli": "ECLI:NL:RB:2021:7330",
    "date": "2021-03-04",
    "summary": "Ruling on environmental regulations compliance in context of case 7330...",
    "domain": "International",
    "citations": 31
  },
  {
    "id": "1027",
    "ecli": "ECLI:NL:RB:2022:7063",
    "date": "2022-01-21",
    "summary": "Judgment regarding consumer protection laws in context of case 7063...",
    "domain": "Administrative",
    "citations": 3
  },
  {
    "id": "1028",
    "ecli": "ECLI:EU:C:2020:3204",
    "date": "2020-11-08",
    "summary": "Case concerning labor law disputes in context of case 3204...",
    "domain": "Criminal",
    "citations": 90
  },
  {
    "id": "1029",
    "ecli": "ECLI:NL:RB:2021:1866",
    "date": "2021-08-12",
    "summary": "Decision regarding contract law interpretation in context of case 1866...",
    "domain": "Criminal",
    "citations": 20
  },
  {
    "id": "1030",
    "ecli": "ECLI:NL:HR:2022:6220",
    "date": "2022-10-08",
    "summary": "Decision on human rights violations in context of case 6220...",
    "domain": "Civil",
    "citations": 15
  },
  {
    "id": "1031",
    "ecli": "ECLI:NL:HR:2023:2388",
    "date": "2023-10-09",
    "summary": "Ruling on antitrust and competition in context of case 2388...",
    "domain": "Familial",
    "citations": 20
  },
  {
    "id": "1032",
    "ecli": "ECLI:NL:HR:2023:5229",
    "date": "2023-01-28",
    "summary": "Judgment regarding consumer protection laws in context of case 5229...",
    "domain": "International",
    "citations": 51
  },
  {
    "id": "1033",
    "ecli": "ECLI:EU:C:2021:0823",
    "date": "2021-11-15",
    "summary": "Ruling on environmental regulations compliance in context of case 0823...",
    "domain": "Administrative",
    "citations": 30
  },
  {
    "id": "1034",
    "ecli": "ECLI:ECHR:2021:5524",
    "date": "2021-09-13",
    "summary": "Ruling on environmental regulations compliance in context of case 5524...",
    "domain": "Criminal",
    "citations": 93
  },
  {
    "id": "1035",
    "ecli": "ECLI:NL:RB:2020:2573",
    "date": "2020-10-26",
    "summary": "Advisory opinion on criminal procedure in context of case 2573...",
    "domain": "International",
    "citations": 4
  },
  {
    "id": "1036",
    "ecli": "ECLI:EU:C:2021:7109",
    "date": "2021-11-08",
    "summary": "Judgment on intellectual property rights in context of case 7109...",
    "domain": "Civil",
    "citations": 88
  },
  {
    "id": "1037",
    "ecli": "ECLI:NL:HR:2021:2530",
    "date": "2021-01-07",
    "summary": "Preliminary ruling on data protection in context of case 2530...",
    "domain": "Familial",
    "citations": 95
  },
  {
    "id": "1038",
    "ecli": "ECLI:EU:C:2024:2395",
    "date": "2024-05-07",
    "summary": "Preliminary ruling on data protection in context of case 2395...",
    "domain": "Civil",
    "citations": 41
  },
  {
    "id": "1039",
    "ecli": "ECLI:EU:C:2021:7838",
    "date": "2021-03-01",
    "summary": "Judgment on intellectual property rights in context of case 7838...",
    "domain": "International",
    "citations": 23
  },
  {
    "id": "1040",
    "ecli": "ECLI:ECHR:2024:8347",
    "date": "2024-02-06",
    "summary": "Ruling on antitrust and competition in context of case 8347...",
    "domain": "Civil",
    "citations": 52
  },
  {
    "id": "1041",
    "ecli": "ECLI:NL:HR:2021:2601",
    "date": "2021-01-17",
    "summary": "Judgment on intellectual property rights in context of case 2601...",
    "domain": "Criminal",
    "citations": 42
  },
  {
    "id": "1042",
    "ecli": "ECLI:ECHR:2022:7342",
    "date": "2022-05-06",
    "summary": "Ruling on environmental regulations compliance in context of case 7342...",
    "domain": "Administrative",
    "citations": 58
  },
  {
    "id": "1043",
    "ecli": "ECLI:NL:HR:2024:2776",
    "date": "2024-12-05",
    "summary": "Judgment on intellectual property rights in context of case 2776...",
    "domain": "Civil",
    "citations": 93
  },
  {
    "id": "1044",
    "ecli": "ECLI:NL:GH:2023:3134",
    "date": "2023-05-08",
    "summary": "Ruling on antitrust and competition in context of case 3134...",
    "domain": "Familial",
    "citations": 0
  },
  {
    "id": "1045",
    "ecli": "ECLI:NL:RB:2021:3485",
    "date": "2021-07-15",
    "summary": "Interpretation of maritime law in context of case 3485...",
    "domain": "Administrative",
    "citations": 39
  },
  {
    "id": "1046",
    "ecli": "ECLI:NL:PHR:2022:2682",
    "date": "2022-07-08",
    "summary": "Preliminary ruling on data protection in context of case 2682...",
    "domain": "Familial",
    "citations": 60
  },
  {
    "id": "1047",
    "ecli": "ECLI:NL:GH:2022:1903",
    "date": "2022-05-23",
    "summary": "Ruling on antitrust and competition in context of case 1903...",
    "domain": "Civil",
    "citations": 79
  },
  {
    "id": "1048",
    "ecli": "ECLI:NL:RB:2023:6092",
    "date": "2023-04-26",
    "summary": "Judgment on intellectual property rights in context of case 6092...",
    "domain": "Familial",
    "citations": 12
  },
  {
    "id": "1049",
    "ecli": "ECLI:NL:RB:2023:7823",
    "date": "2023-08-03",
    "summary": "Ruling on environmental regulations compliance in context of case 7823...",
    "domain": "Criminal",
    "citations": 70
  },
  {
    "id": "1050",
    "ecli": "ECLI:NL:PHR:2023:9718",
    "date": "2023-06-07",
    "summary": "Judgment on intellectual property rights in context of case 9718...",
    "domain": "International",
    "citations": 72
  },
  {
    "id": "1051",
    "ecli": "ECLI:EU:C:2024:6750",
    "date": "2024-12-11",
    "summary": "Interpretation of maritime law in context of case 6750...",
    "domain": "Civil",
    "citations": 49
  },
  {
    "id": "1052",
    "ecli": "ECLI:ECHR:2024:0860",
    "date": "2024-12-04",
    "summary": "Preliminary ruling on data protection in context of case 0860...",
    "domain": "Administrative",
    "citations": 13
  },
  {
    "id": "1053",
    "ecli": "ECLI:NL:HR:2021:6923",
    "date": "2021-01-21",
    "summary": "Case concerning labor law disputes in context of case 6923...",
    "domain": "Administrative",
    "citations": 67
  },
  {
    "id": "1054",
    "ecli": "ECLI:NL:HR:2023:7655",
    "date": "2023-01-26",
    "summary": "Advisory opinion on criminal procedure in context of case 7655...",
    "domain": "Familial",
    "citations": 14
  },
  {
    "id": "1055",
    "ecli": "ECLI:ECHR:2022:1539",
    "date": "2022-09-12",
    "summary": "Decision on human rights violations in context of case 1539...",
    "domain": "International",
    "citations": 19
  },
  {
    "id": "1056",
    "ecli": "ECLI:NL:RB:2023:8052",
    "date": "2023-02-09",
    "summary": "Judgment on intellectual property rights in context of case 8052...",
    "domain": "Civil",
    "citations": 57
  },
  {
    "id": "1057",
    "ecli": "ECLI:NL:RB:2023:1009",
    "date": "2023-02-18",
    "summary": "Advisory opinion on criminal procedure in context of case 1009...",
    "domain": "Criminal",
    "citations": 30
  },
  {
    "id": "1058",
    "ecli": "ECLI:NL:GH:2024:1874",
    "date": "2024-03-25",
    "summary": "Judgment regarding consumer protection laws in context of case 1874...",
    "domain": "Administrative",
    "citations": 4
  },
  {
    "id": "1059",
    "ecli": "ECLI:NL:RB:2020:2556",
    "date": "2020-06-10",
    "summary": "Decision on human rights violations in context of case 2556...",
    "domain": "Civil",
    "citations": 82
  },
  {
    "id": "1060",
    "ecli": "ECLI:NL:PHR:2022:5592",
    "date": "2022-12-10",
    "summary": "Judgment on intellectual property rights in context of case 5592...",
    "domain": "Criminal",
    "citations": 68
  },
  {
    "id": "1061",
    "ecli": "ECLI:NL:PHR:2023:4986",
    "date": "2023-07-20",
    "summary": "Decision regarding contract law interpretation in context of case 4986...",
    "domain": "International",
    "citations": 75
  },
  {
    "id": "1062",
    "ecli": "ECLI:NL:PHR:2024:5669",
    "date": "2024-10-26",
    "summary": "Judgment on intellectual property rights in context of case 5669...",
    "domain": "Familial",
    "citations": 51
  },
  {
    "id": "1063",
    "ecli": "ECLI:NL:GH:2022:4539",
    "date": "2022-08-07",
    "summary": "Decision on human rights violations in context of case 4539...",
    "domain": "Familial",
    "citations": 83
  },
  {
    "id": "1064",
    "ecli": "ECLI:NL:HR:2023:0933",
    "date": "2023-07-22",
    "summary": "Advisory opinion on criminal procedure in context of case 0933...",
    "domain": "Administrative",
    "citations": 14
  },
  {
    "id": "1065",
    "ecli": "ECLI:EU:C:2024:1124",
    "date": "2024-04-24",
    "summary": "Judgment regarding consumer protection laws in context of case 1124...",
    "domain": "Criminal",
    "citations": 30
  },
  {
    "id": "1066",
    "ecli": "ECLI:NL:GH:2021:7515",
    "date": "2021-04-16",
    "summary": "Advisory opinion on criminal procedure in context of case 7515...",
    "domain": "Constitutional",
    "citations": 50
  },
  {
    "id": "1067",
    "ecli": "ECLI:EU:C:2024:8294",
    "date": "2024-01-01",
    "summary": "Decision on human rights violations in context of case 8294...",
    "domain": "Civil",
    "citations": 63
  },
  {
    "id": "1068",
    "ecli": "ECLI:NL:PHR:2024:1660",
    "date": "2024-03-21",
    "summary": "Preliminary ruling on data protection in context of case 1660...",
    "domain": "International",
    "citations": 42
  },
  {
    "id": "1069",
    "ecli": "ECLI:NL:HR:2022:8759",
    "date": "2022-02-22",
    "summary": "Ruling on antitrust and competition in context of case 8759...",
    "domain": "Civil",
    "citations": 8
  },
  {
    "id": "1070",
    "ecli": "ECLI:EU:C:2022:5619",
    "date": "2022-12-06",
    "summary": "Preliminary ruling on data protection in context of case 5619...",
    "domain": "Constitutional",
    "citations": 60
  },
  {
    "id": "1071",
    "ecli": "ECLI:NL:GH:2022:6516",
    "date": "2022-05-15",
    "summary": "Ruling on environmental regulations compliance in context of case 6516...",
    "domain": "Civil",
    "citations": 18
  },
  {
    "id": "1072",
    "ecli": "ECLI:ECHR:2024:4105",
    "date": "2024-10-24",
    "summary": "Ruling on antitrust and competition in context of case 4105...",
    "domain": "Familial",
    "citations": 18
  },
  {
    "id": "1073",
    "ecli": "ECLI:NL:RB:2022:7500",
    "date": "2022-01-27",
    "summary": "Advisory opinion on criminal procedure in context of case 7500...",
    "domain": "Administrative",
    "citations": 22
  },
  {
    "id": "1074",
    "ecli": "ECLI:NL:GH:2020:8754",
    "date": "2020-05-07",
    "summary": "Interpretation of maritime law in context of case 8754...",
    "domain": "International",
    "citations": 73
  },
  {
    "id": "1075",
    "ecli": "ECLI:ECHR:2021:4390",
    "date": "2021-12-20",
    "summary": "Case concerning labor law disputes in context of case 4390...",
    "domain": "Constitutional",
    "citations": 31
  },
  {
    "id": "1076",
    "ecli": "ECLI:NL:GH:2020:9053",
    "date": "2020-07-03",
    "summary": "Ruling on antitrust and competition in context of case 9053...",
    "domain": "Constitutional",
    "citations": 13
  },
  {
    "id": "1077",
    "ecli": "ECLI:NL:HR:2023:1451",
    "date": "2023-05-23",
    "summary": "Preliminary ruling on data protection in context of case 1451...",
    "domain": "International",
    "citations": 57
  },
  {
    "id": "1078",
    "ecli": "ECLI:NL:HR:2020:8681",
    "date": "2020-03-07",
    "summary": "Advisory opinion on criminal procedure in context of case 8681...",
    "domain": "Constitutional",
    "citations": 74
  },
  {
    "id": "1079",
    "ecli": "ECLI:NL:PHR:2023:7379",
    "date": "2023-07-02",
    "summary": "Judgment on intellectual property rights in context of case 7379...",
    "domain": "Constitutional",
    "citations": 48
  },
  {
    "id": "1080",
    "ecli": "ECLI:ECHR:2020:5062",
    "date": "2020-10-20",
    "summary": "Advisory opinion on criminal procedure in context of case 5062...",
    "domain": "Administrative",
    "citations": 44
  },
  {
    "id": "1081",
    "ecli": "ECLI:NL:HR:2020:6155",
    "date": "2020-04-21",
    "summary": "Ruling on antitrust and competition in context of case 6155...",
    "domain": "Constitutional",
    "citations": 32
  },
  {
    "id": "1082",
    "ecli": "ECLI:NL:RB:2022:5488",
    "date": "2022-07-17",
    "summary": "Ruling on environmental regulations compliance in context of case 5488...",
    "domain": "Civil",
    "citations": 40
  },
  {
    "id": "1083",
    "ecli": "ECLI:EU:C:2022:9273",
    "date": "2022-03-01",
    "summary": "Decision on human rights violations in context of case 9273...",
    "domain": "Civil",
    "citations": 56
  },
  {
    "id": "1084",
    "ecli": "ECLI:ECHR:2023:9353",
    "date": "2023-10-13",
    "summary": "Judgment on intellectual property rights in context of case 9353...",
    "domain": "Familial",
    "citations": 21
  },
  {
    "id": "1085",
    "ecli": "ECLI:ECHR:2024:8588",
    "date": "2024-05-22",
    "summary": "Interpretation of maritime law in context of case 8588...",
    "domain": "Constitutional",
    "citations": 51
  },
  {
    "id": "1086",
    "ecli": "ECLI:NL:RB:2022:4419",
    "date": "2022-12-13",
    "summary": "Decision on human rights violations in context of case 4419...",
    "domain": "Constitutional",
    "citations": 17
  },
  {
    "id": "1087",
    "ecli": "ECLI:NL:PHR:2024:0228",
    "date": "2024-11-05",
    "summary": "Judgment on intellectual property rights in context of case 0228...",
    "domain": "Constitutional",
    "citations": 20
  },
  {
    "id": "1088",
    "ecli": "ECLI:ECHR:2020:2089",
    "date": "2020-07-11",
    "summary": "Preliminary ruling on data protection in context of case 2089...",
    "domain": "International",
    "citations": 51
  },
  {
    "id": "1089",
    "ecli": "ECLI:EU:C:2021:7483",
    "date": "2021-05-24",
    "summary": "Judgment regarding consumer protection laws in context of case 7483...",
    "domain": "International",
    "citations": 65
  },
  {
    "id": "1090",
    "ecli": "ECLI:NL:RB:2020:5774",
    "date": "2020-12-25",
    "summary": "Decision regarding contract law interpretation in context of case 5774...",
    "domain": "Familial",
    "citations": 17
  },
  {
    "id": "1091",
    "ecli": "ECLI:NL:GH:2021:7383",
    "date": "2021-12-10",
    "summary": "Case concerning labor law disputes in context of case 7383...",
    "domain": "Constitutional",
    "citations": 94
  },
  {
    "id": "1092",
    "ecli": "ECLI:NL:GH:2022:6095",
    "date": "2022-09-27",
    "summary": "Ruling on environmental regulations compliance in context of case 6095...",
    "domain": "Criminal",
    "citations": 10
  },
  {
    "id": "1093",
    "ecli": "ECLI:ECHR:2024:4063",
    "date": "2024-09-08",
    "summary": "Interpretation of maritime law in context of case 4063...",
    "domain": "Criminal",
    "citations": 61
  },
  {
    "id": "1094",
    "ecli": "ECLI:EU:C:2021:0494",
    "date": "2021-03-12",
    "summary": "Judgment regarding consumer protection laws in context of case 0494...",
    "domain": "Criminal",
    "citations": 21
  },
  {
    "id": "1095",
    "ecli": "ECLI:NL:GH:2021:2143",
    "date": "2021-09-21",
    "summary": "Interpretation of maritime law in context of case 2143...",
    "domain": "Administrative",
    "citations": 62
  },
  {
    "id": "1096",
    "ecli": "ECLI:NL:GH:2024:3020",
    "date": "2024-08-24",
    "summary": "Case concerning labor law disputes in context of case 3020...",
    "domain": "Familial",
    "citations": 73
  },
  {
    "id": "1097",
    "ecli": "ECLI:NL:RB:2020:7302",
    "date": "2020-04-16",
    "summary": "Decision on human rights violations in context of case 7302...",
    "domain": "International",
    "citations": 61
  },
  {
    "id": "1098",
    "ecli": "ECLI:EU:C:2020:3635",
    "date": "2020-08-25",
    "summary": "Judgment regarding consumer protection laws in context of case 3635...",
    "domain": "Constitutional",
    "citations": 97
  },
  {
    "id": "1099",
    "ecli": "ECLI:ECHR:2020:7946",
    "date": "2020-07-03",
    "summary": "Decision regarding contract law interpretation in context of case 7946...",
    "domain": "International",
    "citations": 42
  },
  {
    "id": "1100",
    "ecli": "ECLI:ECHR:2023:6445",
    "date": "2023-02-23",
    "summary": "Judgment regarding consumer protection laws in context of case 6445...",
    "domain": "Constitutional",
    "citations": 65
  },
  {
    "id": "1101",
    "ecli": "ECLI:EU:C:2023:3497",
    "date": "2023-02-25",
    "summary": "Ruling on environmental regulations compliance in context of case 3497...",
    "domain": "Administrative",
    "citations": 16
  },
  {
    "id": "1102",
    "ecli": "ECLI:NL:GH:2020:5998",
    "date": "2020-01-14",
    "summary": "Judgment on intellectual property rights in context of case 5998...",
    "domain": "Civil",
    "citations": 39
  },
  {
    "id": "1103",
    "ecli": "ECLI:NL:HR:2020:9679",
    "date": "2020-11-08",
    "summary": "Judgment regarding consumer protection laws in context of case 9679...",
    "domain": "Constitutional",
    "citations": 89
  },
  {
    "id": "1104",
    "ecli": "ECLI:NL:HR:2022:5582",
    "date": "2022-04-05",
    "summary": "Decision regarding contract law interpretation in context of case 5582...",
    "domain": "International",
    "citations": 86
  },
  {
    "id": "1105",
    "ecli": "ECLI:ECHR:2023:0017",
    "date": "2023-02-19",
    "summary": "Ruling on antitrust and competition in context of case 0017...",
    "domain": "Civil",
    "citations": 80
  },
  {
    "id": "1106",
    "ecli": "ECLI:NL:RB:2023:0602",
    "date": "2023-05-04",
    "summary": "Advisory opinion on criminal procedure in context of case 0602...",
    "domain": "International",
    "citations": 28
  },
  {
    "id": "1107",
    "ecli": "ECLI:NL:RB:2022:1137",
    "date": "2022-12-15",
    "summary": "Interpretation of maritime law in context of case 1137...",
    "domain": "Familial",
    "citations": 69
  },
  {
    "id": "1108",
    "ecli": "ECLI:NL:PHR:2023:7181",
    "date": "2023-06-15",
    "summary": "Decision regarding contract law interpretation in context of case 7181...",
    "domain": "Familial",
    "citations": 1
  },
  {
    "id": "1109",
    "ecli": "ECLI:NL:PHR:2024:1141",
    "date": "2024-04-05",
    "summary": "Advisory opinion on criminal procedure in context of case 1141...",
    "domain": "Criminal",
    "citations": 65
  },
  {
    "id": "1110",
    "ecli": "ECLI:NL:PHR:2021:0369",
    "date": "2021-05-25",
    "summary": "Case concerning labor law disputes in context of case 0369...",
    "domain": "Constitutional",
    "citations": 86
  },
  {
    "id": "1111",
    "ecli": "ECLI:NL:PHR:2020:4024",
    "date": "2020-11-03",
    "summary": "Case concerning labor law disputes in context of case 4024...",
    "domain": "Constitutional",
    "citations": 0
  },
  {
    "id": "1112",
    "ecli": "ECLI:NL:PHR:2024:6601",
    "date": "2024-03-25",
    "summary": "Interpretation of maritime law in context of case 6601...",
    "domain": "Civil",
    "citations": 31
  },
  {
    "id": "1113",
    "ecli": "ECLI:NL:RB:2022:7491",
    "date": "2022-09-01",
    "summary": "Advisory opinion on criminal procedure in context of case 7491...",
    "domain": "Criminal",
    "citations": 46
  },
  {
    "id": "1114",
    "ecli": "ECLI:NL:PHR:2020:2074",
    "date": "2020-11-06",
    "summary": "Advisory opinion on criminal procedure in context of case 2074...",
    "domain": "Civil",
    "citations": 90
  },
  {
    "id": "1115",
    "ecli": "ECLI:NL:RB:2021:9807",
    "date": "2021-08-20",
    "summary": "Ruling on environmental regulations compliance in context of case 9807...",
    "domain": "Civil",
    "citations": 35
  },
  {
    "id": "1116",
    "ecli": "ECLI:NL:RB:2024:1222",
    "date": "2024-04-20",
    "summary": "Decision regarding contract law interpretation in context of case 1222...",
    "domain": "International",
    "citations": 20
  },
  {
    "id": "1117",
    "ecli": "ECLI:NL:HR:2023:3702",
    "date": "2023-05-02",
    "summary": "Interpretation of maritime law in context of case 3702...",
    "domain": "Civil",
    "citations": 77
  },
  {
    "id": "1118",
    "ecli": "ECLI:NL:PHR:2023:8299",
    "date": "2023-11-03",
    "summary": "Ruling on antitrust and competition in context of case 8299...",
    "domain": "Constitutional",
    "citations": 67
  },
  {
    "id": "1119",
    "ecli": "ECLI:NL:PHR:2022:7725",
    "date": "2022-12-19",
    "summary": "Advisory opinion on criminal procedure in context of case 7725...",
    "domain": "Familial",
    "citations": 53
  },
  {
    "id": "1120",
    "ecli": "ECLI:NL:GH:2020:8384",
    "date": "2020-08-21",
    "summary": "Decision regarding contract law interpretation in context of case 8384...",
    "domain": "Constitutional",
    "citations": 14
  },
  {
    "id": "1121",
    "ecli": "ECLI:EU:C:2024:5388",
    "date": "2024-01-05",
    "summary": "Interpretation of maritime law in context of case 5388...",
    "domain": "Constitutional",
    "citations": 97
  },
  {
    "id": "1122",
    "ecli": "ECLI:NL:PHR:2020:1503",
    "date": "2020-06-01",
    "summary": "Advisory opinion on criminal procedure in context of case 1503...",
    "domain": "Administrative",
    "citations": 89
  },
  {
    "id": "1123",
    "ecli": "ECLI:ECHR:2023:4331",
    "date": "2023-09-17",
    "summary": "Decision on human rights violations in context of case 4331...",
    "domain": "Familial",
    "citations": 18
  },
  {
    "id": "1124",
    "ecli": "ECLI:NL:RB:2024:7202",
    "date": "2024-01-01",
    "summary": "Decision regarding contract law interpretation in context of case 7202...",
    "domain": "Criminal",
    "citations": 88
  },
  {
    "id": "1125",
    "ecli": "ECLI:NL:GH:2022:9883",
    "date": "2022-06-16",
    "summary": "Advisory opinion on criminal procedure in context of case 9883...",
    "domain": "Criminal",
    "citations": 61
  },
  {
    "id": "1126",
    "ecli": "ECLI:NL:PHR:2022:8923",
    "date": "2022-11-18",
    "summary": "Preliminary ruling on data protection in context of case 8923...",
    "domain": "Criminal",
    "citations": 56
  },
  {
    "id": "1127",
    "ecli": "ECLI:EU:C:2022:2333",
    "date": "2022-06-16",
    "summary": "Advisory opinion on criminal procedure in context of case 2333...",
    "domain": "Familial",
    "citations": 36
  },
  {
    "id": "1128",
    "ecli": "ECLI:EU:C:2021:8949",
    "date": "2021-06-23",
    "summary": "Ruling on antitrust and competition in context of case 8949...",
    "domain": "Familial",
    "citations": 86
  },
  {
    "id": "1129",
    "ecli": "ECLI:NL:RB:2021:3351",
    "date": "2021-04-07",
    "summary": "Interpretation of maritime law in context of case 3351...",
    "domain": "Criminal",
    "citations": 73
  },
  {
    "id": "1130",
    "ecli": "ECLI:NL:HR:2021:7402",
    "date": "2021-06-13",
    "summary": "Interpretation of maritime law in context of case 7402...",
    "domain": "Civil",
    "citations": 60
  },
  {
    "id": "1131",
    "ecli": "ECLI:EU:C:2021:2677",
    "date": "2021-07-03",
    "summary": "Ruling on environmental regulations compliance in context of case 2677...",
    "domain": "Familial",
    "citations": 7
  },
  {
    "id": "1132",
    "ecli": "ECLI:NL:GH:2024:7612",
    "date": "2024-11-17",
    "summary": "Judgment regarding consumer protection laws in context of case 7612...",
    "domain": "Familial",
    "citations": 54
  },
  {
    "id": "1133",
    "ecli": "ECLI:NL:RB:2022:7234",
    "date": "2022-02-04",
    "summary": "Preliminary ruling on data protection in context of case 7234...",
    "domain": "Civil",
    "citations": 29
  },
  {
    "id": "1134",
    "ecli": "ECLI:NL:RB:2022:5208",
    "date": "2022-11-27",
    "summary": "Preliminary ruling on data protection in context of case 5208...",
    "domain": "Constitutional",
    "citations": 1
  },
  {
    "id": "1135",
    "ecli": "ECLI:NL:HR:2022:0697",
    "date": "2022-12-19",
    "summary": "Ruling on antitrust and competition in context of case 0697...",
    "domain": "Criminal",
    "citations": 43
  },
  {
    "id": "1136",
    "ecli": "ECLI:ECHR:2020:1629",
    "date": "2020-04-22",
    "summary": "Ruling on environmental regulations compliance in context of case 1629...",
    "domain": "Familial",
    "citations": 89
  },
  {
    "id": "1137",
    "ecli": "ECLI:NL:GH:2021:1313",
    "date": "2021-11-20",
    "summary": "Preliminary ruling on data protection in context of case 1313...",
    "domain": "Constitutional",
    "citations": 29
  },
  {
    "id": "1138",
    "ecli": "ECLI:NL:HR:2021:9736",
    "date": "2021-05-06",
    "summary": "Decision regarding contract law interpretation in context of case 9736...",
    "domain": "Constitutional",
    "citations": 50
  },
  {
    "id": "1139",
    "ecli": "ECLI:NL:PHR:2022:7556",
    "date": "2022-03-10",
    "summary": "Case concerning labor law disputes in context of case 7556...",
    "domain": "International",
    "citations": 48
  },
  {
    "id": "1140",
    "ecli": "ECLI:NL:HR:2022:0138",
    "date": "2022-03-02",
    "summary": "Preliminary ruling on data protection in context of case 0138...",
    "domain": "Administrative",
    "citations": 87
  },
  {
    "id": "1141",
    "ecli": "ECLI:NL:GH:2023:2772",
    "date": "2023-09-04",
    "summary": "Ruling on environmental regulations compliance in context of case 2772...",
    "domain": "Criminal",
    "citations": 96
  },
  {
    "id": "1142",
    "ecli": "ECLI:ECHR:2020:8304",
    "date": "2020-10-08",
    "summary": "Decision regarding contract law interpretation in context of case 8304...",
    "domain": "International",
    "citations": 21
  },
  {
    "id": "1143",
    "ecli": "ECLI:EU:C:2023:3407",
    "date": "2023-12-20",
    "summary": "Ruling on antitrust and competition in context of case 3407...",
    "domain": "International",
    "citations": 14
  },
  {
    "id": "1144",
    "ecli": "ECLI:NL:RB:2020:0585",
    "date": "2020-07-20",
    "summary": "Judgment regarding consumer protection laws in context of case 0585...",
    "domain": "Criminal",
    "citations": 1
  },
  {
    "id": "1145",
    "ecli": "ECLI:NL:PHR:2023:0995",
    "date": "2023-10-06",
    "summary": "Case concerning labor law disputes in context of case 0995...",
    "domain": "Civil",
    "citations": 66
  },
  {
    "id": "1146",
    "ecli": "ECLI:EU:C:2023:9364",
    "date": "2023-12-18",
    "summary": "Judgment regarding consumer protection laws in context of case 9364...",
    "domain": "Familial",
    "citations": 91
  },
  {
    "id": "1147",
    "ecli": "ECLI:NL:HR:2020:4885",
    "date": "2020-11-03",
    "summary": "Ruling on antitrust and competition in context of case 4885...",
    "domain": "Administrative",
    "citations": 30
  },
  {
    "id": "1148",
    "ecli": "ECLI:NL:HR:2020:4927",
    "date": "2020-09-28",
    "summary": "Preliminary ruling on data protection in context of case 4927...",
    "domain": "International",
    "citations": 10
  },
  {
    "id": "1149",
    "ecli": "ECLI:NL:PHR:2022:4306",
    "date": "2022-06-28",
    "summary": "Decision regarding contract law interpretation in context of case 4306...",
    "domain": "Civil",
    "citations": 12
  },
  {
    "id": "1150",
    "ecli": "ECLI:NL:PHR:2022:1380",
    "date": "2022-09-17",
    "summary": "Ruling on environmental regulations compliance in context of case 1380...",
    "domain": "International",
    "citations": 85
  },
  {
    "id": "1151",
    "ecli": "ECLI:ECHR:2021:9578",
    "date": "2021-07-12",
    "summary": "Case concerning labor law disputes in context of case 9578...",
    "domain": "Familial",
    "citations": 89
  },
  {
    "id": "1152",
    "ecli": "ECLI:NL:PHR:2020:9562",
    "date": "2020-07-15",
    "summary": "Case concerning labor law disputes in context of case 9562...",
    "domain": "Criminal",
    "citations": 7
  },
  {
    "id": "1153",
    "ecli": "ECLI:NL:RB:2024:7592",
    "date": "2024-03-26",
    "summary": "Interpretation of maritime law in context of case 7592...",
    "domain": "Civil",
    "citations": 39
  },
  {
    "id": "1154",
    "ecli": "ECLI:ECHR:2021:5030",
    "date": "2021-11-06",
    "summary": "Decision regarding contract law interpretation in context of case 5030...",
    "domain": "Constitutional",
    "citations": 24
  },
  {
    "id": "1155",
    "ecli": "ECLI:NL:RB:2020:0552",
    "date": "2020-01-11",
    "summary": "Judgment regarding consumer protection laws in context of case 0552...",
    "domain": "Familial",
    "citations": 51
  },
  {
    "id": "1156",
    "ecli": "ECLI:EU:C:2021:4434",
    "date": "2021-03-10",
    "summary": "Judgment regarding consumer protection laws in context of case 4434...",
    "domain": "Civil",
    "citations": 67
  },
  {
    "id": "1157",
    "ecli": "ECLI:ECHR:2021:4877",
    "date": "2021-02-13",
    "summary": "Case concerning labor law disputes in context of case 4877...",
    "domain": "Criminal",
    "citations": 20
  },
  {
    "id": "1158",
    "ecli": "ECLI:NL:RB:2021:5555",
    "date": "2021-06-15",
    "summary": "Ruling on environmental regulations compliance in context of case 5555...",
    "domain": "Familial",
    "citations": 91
  },
  {
    "id": "1159",
    "ecli": "ECLI:NL:GH:2022:8583",
    "date": "2022-09-01",
    "summary": "Interpretation of maritime law in context of case 8583...",
    "domain": "Civil",
    "citations": 85
  },
  {
    "id": "1160",
    "ecli": "ECLI:EU:C:2021:7045",
    "date": "2021-08-05",
    "summary": "Ruling on antitrust and competition in context of case 7045...",
    "domain": "Criminal",
    "citations": 58
  },
  {
    "id": "1161",
    "ecli": "ECLI:NL:GH:2022:5301",
    "date": "2022-06-16",
    "summary": "Decision regarding contract law interpretation in context of case 5301...",
    "domain": "Civil",
    "citations": 35
  },
  {
    "id": "1162",
    "ecli": "ECLI:NL:PHR:2024:5940",
    "date": "2024-06-07",
    "summary": "Advisory opinion on criminal procedure in context of case 5940...",
    "domain": "International",
    "citations": 78
  },
  {
    "id": "1163",
    "ecli": "ECLI:ECHR:2023:5200",
    "date": "2023-11-02",
    "summary": "Interpretation of maritime law in context of case 5200...",
    "domain": "Civil",
    "citations": 37
  },
  {
    "id": "1164",
    "ecli": "ECLI:ECHR:2024:6207",
    "date": "2024-11-20",
    "summary": "Preliminary ruling on data protection in context of case 6207...",
    "domain": "Familial",
    "citations": 25
  },
  {
    "id": "1165",
    "ecli": "ECLI:EU:C:2022:4456",
    "date": "2022-12-01",
    "summary": "Judgment regarding consumer protection laws in context of case 4456...",
    "domain": "Constitutional",
    "citations": 38
  },
  {
    "id": "1166",
    "ecli": "ECLI:NL:RB:2021:0413",
    "date": "2021-05-17",
    "summary": "Judgment on intellectual property rights in context of case 0413...",
    "domain": "Criminal",
    "citations": 84
  },
  {
    "id": "1167",
    "ecli": "ECLI:ECHR:2021:1625",
    "date": "2021-10-01",
    "summary": "Decision regarding contract law interpretation in context of case 1625...",
    "domain": "Criminal",
    "citations": 52
  },
  {
    "id": "1168",
    "ecli": "ECLI:NL:PHR:2022:8554",
    "date": "2022-08-24",
    "summary": "Advisory opinion on criminal procedure in context of case 8554...",
    "domain": "Administrative",
    "citations": 38
  },
  {
    "id": "1169",
    "ecli": "ECLI:NL:HR:2023:5661",
    "date": "2023-12-26",
    "summary": "Decision on human rights violations in context of case 5661...",
    "domain": "Civil",
    "citations": 21
  },
  {
    "id": "1170",
    "ecli": "ECLI:NL:GH:2021:2824",
    "date": "2021-05-22",
    "summary": "Ruling on environmental regulations compliance in context of case 2824...",
    "domain": "International",
    "citations": 44
  },
  {
    "id": "1171",
    "ecli": "ECLI:NL:GH:2022:3025",
    "date": "2022-01-25",
    "summary": "Preliminary ruling on data protection in context of case 3025...",
    "domain": "Administrative",
    "citations": 43
  },
  {
    "id": "1172",
    "ecli": "ECLI:NL:GH:2021:5321",
    "date": "2021-03-23",
    "summary": "Case concerning labor law disputes in context of case 5321...",
    "domain": "Administrative",
    "citations": 23
  },
  {
    "id": "1173",
    "ecli": "ECLI:NL:GH:2021:8231",
    "date": "2021-09-24",
    "summary": "Judgment on intellectual property rights in context of case 8231...",
    "domain": "Familial",
    "citations": 53
  },
  {
    "id": "1174",
    "ecli": "ECLI:NL:PHR:2022:6493",
    "date": "2022-11-20",
    "summary": "Judgment on intellectual property rights in context of case 6493...",
    "domain": "Administrative",
    "citations": 79
  },
  {
    "id": "1175",
    "ecli": "ECLI:NL:PHR:2023:5212",
    "date": "2023-01-04",
    "summary": "Judgment regarding consumer protection laws in context of case 5212...",
    "domain": "International",
    "citations": 37
  },
  {
    "id": "1176",
    "ecli": "ECLI:NL:PHR:2024:0023",
    "date": "2024-08-21",
    "summary": "Advisory opinion on criminal procedure in context of case 0023...",
    "domain": "Civil",
    "citations": 18
  },
  {
    "id": "1177",
    "ecli": "ECLI:NL:PHR:2024:9611",
    "date": "2024-08-16",
    "summary": "Judgment regarding consumer protection laws in context of case 9611...",
    "domain": "Administrative",
    "citations": 63
  },
  {
    "id": "1178",
    "ecli": "ECLI:NL:RB:2023:0928",
    "date": "2023-04-21",
    "summary": "Interpretation of maritime law in context of case 0928...",
    "domain": "International",
    "citations": 65
  },
  {
    "id": "1179",
    "ecli": "ECLI:NL:HR:2023:0175",
    "date": "2023-06-16",
    "summary": "Case concerning labor law disputes in context of case 0175...",
    "domain": "Criminal",
    "citations": 66
  },
  {
    "id": "1180",
    "ecli": "ECLI:NL:GH:2022:4380",
    "date": "2022-12-04",
    "summary": "Interpretation of maritime law in context of case 4380...",
    "domain": "Civil",
    "citations": 80
  },
  {
    "id": "1181",
    "ecli": "ECLI:NL:GH:2024:5337",
    "date": "2024-02-12",
    "summary": "Preliminary ruling on data protection in context of case 5337...",
    "domain": "Constitutional",
    "citations": 55
  },
  {
    "id": "1182",
    "ecli": "ECLI:NL:HR:2022:8832",
    "date": "2022-07-22",
    "summary": "Decision on human rights violations in context of case 8832...",
    "domain": "International",
    "citations": 32
  },
  {
    "id": "1183",
    "ecli": "ECLI:NL:HR:2020:6247",
    "date": "2020-11-03",
    "summary": "Interpretation of maritime law in context of case 6247...",
    "domain": "Administrative",
    "citations": 42
  },
  {
    "id": "1184",
    "ecli": "ECLI:EU:C:2023:9004",
    "date": "2023-02-07",
    "summary": "Interpretation of maritime law in context of case 9004...",
    "domain": "Civil",
    "citations": 10
  },
  {
    "id": "1185",
    "ecli": "ECLI:NL:RB:2024:6512",
    "date": "2024-07-28",
    "summary": "Case concerning labor law disputes in context of case 6512...",
    "domain": "Administrative",
    "citations": 43
  },
  {
    "id": "1186",
    "ecli": "ECLI:NL:HR:2022:6229",
    "date": "2022-12-19",
    "summary": "Ruling on environmental regulations compliance in context of case 6229...",
    "domain": "Familial",
    "citations": 64
  },
  {
    "id": "1187",
    "ecli": "ECLI:NL:RB:2020:9080",
    "date": "2020-11-27",
    "summary": "Ruling on environmental regulations compliance in context of case 9080...",
    "domain": "International",
    "citations": 18
  },
  {
    "id": "1188",
    "ecli": "ECLI:NL:HR:2024:7745",
    "date": "2024-08-02",
    "summary": "Ruling on environmental regulations compliance in context of case 7745...",
    "domain": "Administrative",
    "citations": 99
  },
  {
    "id": "1189",
    "ecli": "ECLI:NL:GH:2024:8421",
    "date": "2024-06-10",
    "summary": "Advisory opinion on criminal procedure in context of case 8421...",
    "domain": "Civil",
    "citations": 81
  },
  {
    "id": "1190",
    "ecli": "ECLI:NL:GH:2020:1067",
    "date": "2020-09-03",
    "summary": "Judgment regarding consumer protection laws in context of case 1067...",
    "domain": "Administrative",
    "citations": 57
  },
  {
    "id": "1191",
    "ecli": "ECLI:NL:GH:2024:1168",
    "date": "2024-06-25",
    "summary": "Decision on human rights violations in context of case 1168...",
    "domain": "Constitutional",
    "citations": 14
  },
  {
    "id": "1192",
    "ecli": "ECLI:NL:RB:2023:4344",
    "date": "2023-05-16",
    "summary": "Judgment on intellectual property rights in context of case 4344...",
    "domain": "Criminal",
    "citations": 42
  },
  {
    "id": "1193",
    "ecli": "ECLI:NL:RB:2022:1586",
    "date": "2022-02-26",
    "summary": "Ruling on environmental regulations compliance in context of case 1586...",
    "domain": "International",
    "citations": 21
  },
  {
    "id": "1194",
    "ecli": "ECLI:NL:PHR:2022:0399",
    "date": "2022-01-16",
    "summary": "Preliminary ruling on data protection in context of case 0399...",
    "domain": "Administrative",
    "citations": 87
  },
  {
    "id": "1195",
    "ecli": "ECLI:ECHR:2023:6388",
    "date": "2023-01-26",
    "summary": "Judgment on intellectual property rights in context of case 6388...",
    "domain": "Civil",
    "citations": 98
  },
  {
    "id": "1196",
    "ecli": "ECLI:NL:GH:2020:9358",
    "date": "2020-07-08",
    "summary": "Decision on human rights violations in context of case 9358...",
    "domain": "Familial",
    "citations": 20
  },
  {
    "id": "1197",
    "ecli": "ECLI:NL:PHR:2024:7557",
    "date": "2024-02-07",
    "summary": "Judgment on intellectual property rights in context of case 7557...",
    "domain": "Civil",
    "citations": 67
  },
  {
    "id": "1198",
    "ecli": "ECLI:NL:PHR:2021:1230",
    "date": "2021-09-17",
    "summary": "Judgment on intellectual property rights in context of case 1230...",
    "domain": "Criminal",
    "citations": 87
  },
  {
    "id": "1199",
    "ecli": "ECLI:NL:HR:2020:6221",
    "date": "2020-06-27",
    "summary": "Advisory opinion on criminal procedure in context of case 6221...",
    "domain": "Civil",
    "citations": 47
  },
  {
    "id": "1200",
    "ecli": "ECLI:NL:PHR:2021:7605",
    "date": "2021-09-05",
    "summary": "Ruling on environmental regulations compliance in context of case 7605...",
    "domain": "Administrative",
    "citations": 28
  },
  {
    "id": "1201",
    "ecli": "ECLI:EU:C:2021:1313",
    "date": "2021-02-26",
    "summary": "Decision regarding contract law interpretation in context of case 1313...",
    "domain": "International",
    "citations": 81
  },
  {
    "id": "1202",
    "ecli": "ECLI:ECHR:2023:7544",
    "date": "2023-02-14",
    "summary": "Interpretation of maritime law in context of case 7544...",
    "domain": "Civil",
    "citations": 50
  },
  {
    "id": "1203",
    "ecli": "ECLI:NL:HR:2024:4548",
    "date": "2024-06-25",
    "summary": "Interpretation of maritime law in context of case 4548...",
    "domain": "Administrative",
    "citations": 43
  },
  {
    "id": "1204",
    "ecli": "ECLI:NL:RB:2024:3097",
    "date": "2024-09-10",
    "summary": "Judgment on intellectual property rights in context of case 3097...",
    "domain": "Civil",
    "citations": 67
  },
  {
    "id": "1205",
    "ecli": "ECLI:ECHR:2023:2438",
    "date": "2023-12-26",
    "summary": "Decision regarding contract law interpretation in context of case 2438...",
    "domain": "Criminal",
    "citations": 18
  },
  {
    "id": "1206",
    "ecli": "ECLI:EU:C:2020:4239",
    "date": "2020-10-08",
    "summary": "Preliminary ruling on data protection in context of case 4239...",
    "domain": "Civil",
    "citations": 81
  },
  {
    "id": "1207",
    "ecli": "ECLI:NL:PHR:2024:9347",
    "date": "2024-02-01",
    "summary": "Interpretation of maritime law in context of case 9347...",
    "domain": "Criminal",
    "citations": 43
  },
  {
    "id": "1208",
    "ecli": "ECLI:ECHR:2022:8451",
    "date": "2022-05-16",
    "summary": "Judgment on intellectual property rights in context of case 8451...",
    "domain": "Familial",
    "citations": 24
  },
  {
    "id": "1209",
    "ecli": "ECLI:NL:HR:2021:9001",
    "date": "2021-04-19",
    "summary": "Decision on human rights violations in context of case 9001...",
    "domain": "Administrative",
    "citations": 82
  },
  {
    "id": "1210",
    "ecli": "ECLI:NL:HR:2020:0185",
    "date": "2020-12-19",
    "summary": "Interpretation of maritime law in context of case 0185...",
    "domain": "Administrative",
    "citations": 10
  },
  {
    "id": "1211",
    "ecli": "ECLI:NL:PHR:2022:8684",
    "date": "2022-12-19",
    "summary": "Decision on human rights violations in context of case 8684...",
    "domain": "Administrative",
    "citations": 90
  },
  {
    "id": "1212",
    "ecli": "ECLI:NL:HR:2020:6224",
    "date": "2020-11-15",
    "summary": "Judgment regarding consumer protection laws in context of case 6224...",
    "domain": "International",
    "citations": 29
  },
  {
    "id": "1213",
    "ecli": "ECLI:NL:PHR:2023:9845",
    "date": "2023-11-24",
    "summary": "Decision regarding contract law interpretation in context of case 9845...",
    "domain": "Constitutional",
    "citations": 83
  },
  {
    "id": "1214",
    "ecli": "ECLI:NL:PHR:2021:7956",
    "date": "2021-11-22",
    "summary": "Judgment on intellectual property rights in context of case 7956...",
    "domain": "Familial",
    "citations": 23
  },
  {
    "id": "1215",
    "ecli": "ECLI:ECHR:2020:7020",
    "date": "2020-02-03",
    "summary": "Decision on human rights violations in context of case 7020...",
    "domain": "Constitutional",
    "citations": 72
  },
  {
    "id": "1216",
    "ecli": "ECLI:NL:HR:2022:4148",
    "date": "2022-07-13",
    "summary": "Decision on human rights violations in context of case 4148...",
    "domain": "International",
    "citations": 7
  },
  {
    "id": "1217",
    "ecli": "ECLI:EU:C:2023:8014",
    "date": "2023-04-26",
    "summary": "Judgment regarding consumer protection laws in context of case 8014...",
    "domain": "Familial",
    "citations": 30
  },
  {
    "id": "1218",
    "ecli": "ECLI:ECHR:2022:1248",
    "date": "2022-05-11",
    "summary": "Case concerning labor law disputes in context of case 1248...",
    "domain": "Constitutional",
    "citations": 14
  },
  {
    "id": "1219",
    "ecli": "ECLI:ECHR:2024:4419",
    "date": "2024-03-11",
    "summary": "Ruling on antitrust and competition in context of case 4419...",
    "domain": "Civil",
    "citations": 63
  },
  {
    "id": "1220",
    "ecli": "ECLI:EU:C:2024:4436",
    "date": "2024-09-23",
    "summary": "Judgment on intellectual property rights in context of case 4436...",
    "domain": "Criminal",
    "citations": 84
  },
  {
    "id": "1221",
    "ecli": "ECLI:ECHR:2020:6351",
    "date": "2020-08-16",
    "summary": "Interpretation of maritime law in context of case 6351...",
    "domain": "Criminal",
    "citations": 94
  },
  {
    "id": "1222",
    "ecli": "ECLI:ECHR:2022:0493",
    "date": "2022-01-28",
    "summary": "Ruling on antitrust and competition in context of case 0493...",
    "domain": "International",
    "citations": 27
  },
  {
    "id": "1223",
    "ecli": "ECLI:ECHR:2022:2151",
    "date": "2022-06-28",
    "summary": "Advisory opinion on criminal procedure in context of case 2151...",
    "domain": "Civil",
    "citations": 35
  },
  {
    "id": "1224",
    "ecli": "ECLI:EU:C:2024:1210",
    "date": "2024-02-25",
    "summary": "Ruling on environmental regulations compliance in context of case 1210...",
    "domain": "Constitutional",
    "citations": 60
  },
  {
    "id": "1225",
    "ecli": "ECLI:ECHR:2023:6088",
    "date": "2023-05-16",
    "summary": "Decision regarding contract law interpretation in context of case 6088...",
    "domain": "Civil",
    "citations": 10
  },
  {
    "id": "1226",
    "ecli": "ECLI:EU:C:2024:1950",
    "date": "2024-02-07",
    "summary": "Judgment on intellectual property rights in context of case 1950...",
    "domain": "Constitutional",
    "citations": 95
  },
  {
    "id": "1227",
    "ecli": "ECLI:NL:HR:2022:6055",
    "date": "2022-08-16",
    "summary": "Case concerning labor law disputes in context of case 6055...",
    "domain": "International",
    "citations": 11
  },
  {
    "id": "1228",
    "ecli": "ECLI:ECHR:2021:5539",
    "date": "2021-05-02",
    "summary": "Case concerning labor law disputes in context of case 5539...",
    "domain": "Civil",
    "citations": 77
  },
  {
    "id": "1229",
    "ecli": "ECLI:NL:RB:2023:3962",
    "date": "2023-11-13",
    "summary": "Advisory opinion on criminal procedure in context of case 3962...",
    "domain": "Constitutional",
    "citations": 77
  },
  {
    "id": "1230",
    "ecli": "ECLI:EU:C:2021:9183",
    "date": "2021-10-13",
    "summary": "Judgment regarding consumer protection laws in context of case 9183...",
    "domain": "Constitutional",
    "citations": 43
  },
  {
    "id": "1231",
    "ecli": "ECLI:ECHR:2021:7096",
    "date": "2021-12-26",
    "summary": "Decision on human rights violations in context of case 7096...",
    "domain": "International",
    "citations": 85
  },
  {
    "id": "1232",
    "ecli": "ECLI:EU:C:2020:9815",
    "date": "2020-09-19",
    "summary": "Advisory opinion on criminal procedure in context of case 9815...",
    "domain": "Constitutional",
    "citations": 7
  },
  {
    "id": "1233",
    "ecli": "ECLI:NL:HR:2020:3037",
    "date": "2020-07-11",
    "summary": "Advisory opinion on criminal procedure in context of case 3037...",
    "domain": "Constitutional",
    "citations": 3
  },
  {
    "id": "1234",
    "ecli": "ECLI:NL:RB:2020:6388",
    "date": "2020-07-27",
    "summary": "Case concerning labor law disputes in context of case 6388...",
    "domain": "Criminal",
    "citations": 50
  },
  {
    "id": "1235",
    "ecli": "ECLI:NL:PHR:2022:5771",
    "date": "2022-05-08",
    "summary": "Decision on human rights violations in context of case 5771...",
    "domain": "International",
    "citations": 14
  },
  {
    "id": "1236",
    "ecli": "ECLI:NL:GH:2021:9902",
    "date": "2021-01-10",
    "summary": "Ruling on antitrust and competition in context of case 9902...",
    "domain": "Administrative",
    "citations": 41
  },
  {
    "id": "1237",
    "ecli": "ECLI:NL:RB:2021:3453",
    "date": "2021-08-03",
    "summary": "Decision regarding contract law interpretation in context of case 3453...",
    "domain": "Administrative",
    "citations": 47
  },
  {
    "id": "1238",
    "ecli": "ECLI:NL:PHR:2020:0375",
    "date": "2020-07-22",
    "summary": "Judgment on intellectual property rights in context of case 0375...",
    "domain": "Administrative",
    "citations": 28
  },
  {
    "id": "1239",
    "ecli": "ECLI:NL:RB:2023:1818",
    "date": "2023-10-13",
    "summary": "Ruling on environmental regulations compliance in context of case 1818...",
    "domain": "Civil",
    "citations": 29
  },
  {
    "id": "1240",
    "ecli": "ECLI:NL:GH:2023:8656",
    "date": "2023-09-01",
    "summary": "Interpretation of maritime law in context of case 8656...",
    "domain": "International",
    "citations": 77
  },
  {
    "id": "1241",
    "ecli": "ECLI:NL:PHR:2024:4435",
    "date": "2024-10-10",
    "summary": "Judgment on intellectual property rights in context of case 4435...",
    "domain": "Familial",
    "citations": 67
  },
  {
    "id": "1242",
    "ecli": "ECLI:ECHR:2021:6171",
    "date": "2021-08-22",
    "summary": "Decision regarding contract law interpretation in context of case 6171...",
    "domain": "Criminal",
    "citations": 48
  },
  {
    "id": "1243",
    "ecli": "ECLI:EU:C:2020:6442",
    "date": "2020-04-19",
    "summary": "Preliminary ruling on data protection in context of case 6442...",
    "domain": "Familial",
    "citations": 40
  },
  {
    "id": "1244",
    "ecli": "ECLI:NL:GH:2022:1165",
    "date": "2022-11-25",
    "summary": "Case concerning labor law disputes in context of case 1165...",
    "domain": "Criminal",
    "citations": 35
  },
  {
    "id": "1245",
    "ecli": "ECLI:NL:GH:2023:3155",
    "date": "2023-06-28",
    "summary": "Decision regarding contract law interpretation in context of case 3155...",
    "domain": "Civil",
    "citations": 6
  },
  {
    "id": "1246",
    "ecli": "ECLI:NL:PHR:2020:8744",
    "date": "2020-04-20",
    "summary": "Preliminary ruling on data protection in context of case 8744...",
    "domain": "International",
    "citations": 9
  },
  {
    "id": "1247",
    "ecli": "ECLI:NL:PHR:2021:0291",
    "date": "2021-07-23",
    "summary": "Advisory opinion on criminal procedure in context of case 0291...",
    "domain": "Administrative",
    "citations": 93
  },
  {
    "id": "1248",
    "ecli": "ECLI:ECHR:2024:3047",
    "date": "2024-09-19",
    "summary": "Judgment regarding consumer protection laws in context of case 3047...",
    "domain": "Constitutional",
    "citations": 60
  },
  {
    "id": "1249",
    "ecli": "ECLI:NL:RB:2023:7906",
    "date": "2023-03-14",
    "summary": "Case concerning labor law disputes in context of case 7906...",
    "domain": "Civil",
    "citations": 64
  },
  {
    "id": "1250",
    "ecli": "ECLI:NL:PHR:2021:5246",
    "date": "2021-10-25",
    "summary": "Decision regarding contract law interpretation in context of case 5246...",
    "domain": "Criminal",
    "citations": 1
  },
  {
    "id": "1251",
    "ecli": "ECLI:NL:RB:2024:6596",
    "date": "2024-08-20",
    "summary": "Case concerning labor law disputes in context of case 6596...",
    "domain": "Criminal",
    "citations": 6
  },
  {
    "id": "1252",
    "ecli": "ECLI:NL:GH:2024:7102",
    "date": "2024-06-08",
    "summary": "Interpretation of maritime law in context of case 7102...",
    "domain": "Administrative",
    "citations": 74
  },
  {
    "id": "1253",
    "ecli": "ECLI:NL:RB:2020:5713",
    "date": "2020-04-13",
    "summary": "Decision on human rights violations in context of case 5713...",
    "domain": "Constitutional",
    "citations": 35
  },
  {
    "id": "1254",
    "ecli": "ECLI:NL:PHR:2022:3454",
    "date": "2022-12-15",
    "summary": "Decision on human rights violations in context of case 3454...",
    "domain": "International",
    "citations": 36
  },
  {
    "id": "1255",
    "ecli": "ECLI:NL:GH:2020:6422",
    "date": "2020-01-17",
    "summary": "Decision regarding contract law interpretation in context of case 6422...",
    "domain": "Familial",
    "citations": 89
  },
  {
    "id": "1256",
    "ecli": "ECLI:NL:RB:2021:8639",
    "date": "2021-01-21",
    "summary": "Decision regarding contract law interpretation in context of case 8639...",
    "domain": "Constitutional",
    "citations": 2
  },
  {
    "id": "1257",
    "ecli": "ECLI:NL:PHR:2021:7395",
    "date": "2021-12-12",
    "summary": "Interpretation of maritime law in context of case 7395...",
    "domain": "Constitutional",
    "citations": 12
  },
  {
    "id": "1258",
    "ecli": "ECLI:NL:RB:2022:0755",
    "date": "2022-02-25",
    "summary": "Case concerning labor law disputes in context of case 0755...",
    "domain": "Administrative",
    "citations": 51
  },
  {
    "id": "1259",
    "ecli": "ECLI:NL:GH:2024:1138",
    "date": "2024-12-09",
    "summary": "Ruling on antitrust and competition in context of case 1138...",
    "domain": "Criminal",
    "citations": 74
  },
  {
    "id": "1260",
    "ecli": "ECLI:EU:C:2021:2119",
    "date": "2021-02-13",
    "summary": "Judgment on intellectual property rights in context of case 2119...",
    "domain": "Civil",
    "citations": 90
  },
  {
    "id": "1261",
    "ecli": "ECLI:EU:C:2020:3686",
    "date": "2020-06-03",
    "summary": "Judgment on intellectual property rights in context of case 3686...",
    "domain": "Constitutional",
    "citations": 53
  },
  {
    "id": "1262",
    "ecli": "ECLI:NL:GH:2022:0589",
    "date": "2022-02-13",
    "summary": "Ruling on antitrust and competition in context of case 0589...",
    "domain": "International",
    "citations": 82
  },
  {
    "id": "1263",
    "ecli": "ECLI:NL:RB:2022:1726",
    "date": "2022-02-10",
    "summary": "Judgment on intellectual property rights in context of case 1726...",
    "domain": "Criminal",
    "citations": 17
  },
  {
    "id": "1264",
    "ecli": "ECLI:EU:C:2022:2773",
    "date": "2022-09-02",
    "summary": "Decision regarding contract law interpretation in context of case 2773...",
    "domain": "Administrative",
    "citations": 37
  },
  {
    "id": "1265",
    "ecli": "ECLI:NL:HR:2022:3019",
    "date": "2022-05-10",
    "summary": "Case concerning labor law disputes in context of case 3019...",
    "domain": "Administrative",
    "citations": 49
  },
  {
    "id": "1266",
    "ecli": "ECLI:NL:GH:2021:4911",
    "date": "2021-09-27",
    "summary": "Interpretation of maritime law in context of case 4911...",
    "domain": "Familial",
    "citations": 23
  },
  {
    "id": "1267",
    "ecli": "ECLI:EU:C:2024:3299",
    "date": "2024-03-10",
    "summary": "Advisory opinion on criminal procedure in context of case 3299...",
    "domain": "Administrative",
    "citations": 55
  },
  {
    "id": "1268",
    "ecli": "ECLI:EU:C:2023:0279",
    "date": "2023-01-25",
    "summary": "Decision on human rights violations in context of case 0279...",
    "domain": "Familial",
    "citations": 32
  },
  {
    "id": "1269",
    "ecli": "ECLI:NL:GH:2022:6131",
    "date": "2022-01-03",
    "summary": "Decision on human rights violations in context of case 6131...",
    "domain": "Criminal",
    "citations": 61
  },
  {
    "id": "1270",
    "ecli": "ECLI:ECHR:2024:6569",
    "date": "2024-10-09",
    "summary": "Decision regarding contract law interpretation in context of case 6569...",
    "domain": "International",
    "citations": 94
  },
  {
    "id": "1271",
    "ecli": "ECLI:ECHR:2023:6491",
    "date": "2023-10-06",
    "summary": "Interpretation of maritime law in context of case 6491...",
    "domain": "International",
    "citations": 85
  },
  {
    "id": "1272",
    "ecli": "ECLI:NL:RB:2024:7692",
    "date": "2024-03-08",
    "summary": "Decision regarding contract law interpretation in context of case 7692...",
    "domain": "Familial",
    "citations": 66
  },
  {
    "id": "1273",
    "ecli": "ECLI:NL:GH:2024:7662",
    "date": "2024-11-14",
    "summary": "Case concerning labor law disputes in context of case 7662...",
    "domain": "International",
    "citations": 70
  },
  {
    "id": "1274",
    "ecli": "ECLI:NL:GH:2022:0933",
    "date": "2022-08-08",
    "summary": "Case concerning labor law disputes in context of case 0933...",
    "domain": "Civil",
    "citations": 71
  },
  {
    "id": "1275",
    "ecli": "ECLI:NL:HR:2024:1908",
    "date": "2024-01-13",
    "summary": "Interpretation of maritime law in context of case 1908...",
    "domain": "Administrative",
    "citations": 27
  },
  {
    "id": "1276",
    "ecli": "ECLI:ECHR:2024:1167",
    "date": "2024-03-22",
    "summary": "Case concerning labor law disputes in context of case 1167...",
    "domain": "Administrative",
    "citations": 76
  },
  {
    "id": "1277",
    "ecli": "ECLI:EU:C:2021:6727",
    "date": "2021-11-23",
    "summary": "Decision on human rights violations in context of case 6727...",
    "domain": "Familial",
    "citations": 67
  },
  {
    "id": "1278",
    "ecli": "ECLI:NL:RB:2020:7500",
    "date": "2020-08-08",
    "summary": "Decision on human rights violations in context of case 7500...",
    "domain": "Familial",
    "citations": 10
  },
  {
    "id": "1279",
    "ecli": "ECLI:NL:HR:2023:9556",
    "date": "2023-01-03",
    "summary": "Judgment regarding consumer protection laws in context of case 9556...",
    "domain": "Civil",
    "citations": 43
  },
  {
    "id": "1280",
    "ecli": "ECLI:NL:GH:2021:8599",
    "date": "2021-03-20",
    "summary": "Ruling on environmental regulations compliance in context of case 8599...",
    "domain": "Civil",
    "citations": 82
  },
  {
    "id": "1281",
    "ecli": "ECLI:EU:C:2022:7094",
    "date": "2022-06-05",
    "summary": "Interpretation of maritime law in context of case 7094...",
    "domain": "Familial",
    "citations": 68
  },
  {
    "id": "1282",
    "ecli": "ECLI:NL:RB:2022:1848",
    "date": "2022-10-11",
    "summary": "Preliminary ruling on data protection in context of case 1848...",
    "domain": "Constitutional",
    "citations": 6
  },
  {
    "id": "1283",
    "ecli": "ECLI:NL:GH:2022:6505",
    "date": "2022-02-04",
    "summary": "Advisory opinion on criminal procedure in context of case 6505...",
    "domain": "International",
    "citations": 91
  },
  {
    "id": "1284",
    "ecli": "ECLI:NL:HR:2021:9940",
    "date": "2021-11-23",
    "summary": "Case concerning labor law disputes in context of case 9940...",
    "domain": "International",
    "citations": 72
  },
  {
    "id": "1285",
    "ecli": "ECLI:NL:RB:2020:6963",
    "date": "2020-09-16",
    "summary": "Decision on human rights violations in context of case 6963...",
    "domain": "Criminal",
    "citations": 79
  },
  {
    "id": "1286",
    "ecli": "ECLI:NL:GH:2024:7617",
    "date": "2024-01-08",
    "summary": "Ruling on antitrust and competition in context of case 7617...",
    "domain": "Constitutional",
    "citations": 97
  },
  {
    "id": "1287",
    "ecli": "ECLI:EU:C:2021:1270",
    "date": "2021-12-28",
    "summary": "Interpretation of maritime law in context of case 1270...",
    "domain": "Civil",
    "citations": 41
  },
  {
    "id": "1288",
    "ecli": "ECLI:NL:PHR:2023:6455",
    "date": "2023-08-15",
    "summary": "Decision regarding contract law interpretation in context of case 6455...",
    "domain": "Administrative",
    "citations": 70
  },
  {
    "id": "1289",
    "ecli": "ECLI:NL:GH:2022:0431",
    "date": "2022-07-17",
    "summary": "Preliminary ruling on data protection in context of case 0431...",
    "domain": "Administrative",
    "citations": 5
  },
  {
    "id": "1290",
    "ecli": "ECLI:NL:HR:2020:5785",
    "date": "2020-12-13",
    "summary": "Judgment regarding consumer protection laws in context of case 5785...",
    "domain": "Constitutional",
    "citations": 69
  },
  {
    "id": "1291",
    "ecli": "ECLI:ECHR:2023:0210",
    "date": "2023-07-15",
    "summary": "Preliminary ruling on data protection in context of case 0210...",
    "domain": "Administrative",
    "citations": 47
  },
  {
    "id": "1292",
    "ecli": "ECLI:NL:PHR:2024:3122",
    "date": "2024-02-09",
    "summary": "Decision on human rights violations in context of case 3122...",
    "domain": "Criminal",
    "citations": 36
  },
  {
    "id": "1293",
    "ecli": "ECLI:NL:HR:2020:9055",
    "date": "2020-02-15",
    "summary": "Decision on human rights violations in context of case 9055...",
    "domain": "Administrative",
    "citations": 16
  },
  {
    "id": "1294",
    "ecli": "ECLI:NL:RB:2021:0000",
    "date": "2021-01-25",
    "summary": "Preliminary ruling on data protection in context of case 0000...",
    "domain": "Administrative",
    "citations": 5
  },
  {
    "id": "1295",
    "ecli": "ECLI:NL:HR:2020:9388",
    "date": "2020-03-11",
    "summary": "Judgment on intellectual property rights in context of case 9388...",
    "domain": "Administrative",
    "citations": 26
  },
  {
    "id": "1296",
    "ecli": "ECLI:EU:C:2024:6303",
    "date": "2024-03-03",
    "summary": "Decision on human rights violations in context of case 6303...",
    "domain": "Constitutional",
    "citations": 66
  },
  {
    "id": "1297",
    "ecli": "ECLI:NL:RB:2020:6704",
    "date": "2020-05-22",
    "summary": "Preliminary ruling on data protection in context of case 6704...",
    "domain": "Criminal",
    "citations": 84
  },
  {
    "id": "1298",
    "ecli": "ECLI:ECHR:2024:9705",
    "date": "2024-03-18",
    "summary": "Judgment on intellectual property rights in context of case 9705...",
    "domain": "Constitutional",
    "citations": 88
  },
  {
    "id": "1299",
    "ecli": "ECLI:NL:GH:2023:2517",
    "date": "2023-02-21",
    "summary": "Decision regarding contract law interpretation in context of case 2517...",
    "domain": "International",
    "citations": 8
  },
  {
    "id": "1300",
    "ecli": "ECLI:NL:GH:2024:5942",
    "date": "2024-01-09",
    "summary": "Judgment regarding consumer protection laws in context of case 5942...",
    "domain": "Criminal",
    "citations": 16
  },
  {
    "id": "1301",
    "ecli": "ECLI:NL:PHR:2020:2699",
    "date": "2020-12-20",
    "summary": "Decision regarding contract law interpretation in context of case 2699...",
    "domain": "Familial",
    "citations": 69
  },
  {
    "id": "1302",
    "ecli": "ECLI:ECHR:2023:1123",
    "date": "2023-09-14",
    "summary": "Case concerning labor law disputes in context of case 1123...",
    "domain": "Constitutional",
    "citations": 46
  },
  {
    "id": "1303",
    "ecli": "ECLI:NL:HR:2022:4317",
    "date": "2022-03-10",
    "summary": "Ruling on environmental regulations compliance in context of case 4317...",
    "domain": "Civil",
    "citations": 1
  },
  {
    "id": "1304",
    "ecli": "ECLI:NL:HR:2022:1037",
    "date": "2022-12-04",
    "summary": "Decision regarding contract law interpretation in context of case 1037...",
    "domain": "International",
    "citations": 90
  },
  {
    "id": "1305",
    "ecli": "ECLI:NL:GH:2020:3847",
    "date": "2020-04-28",
    "summary": "Case concerning labor law disputes in context of case 3847...",
    "domain": "Civil",
    "citations": 94
  },
  {
    "id": "1306",
    "ecli": "ECLI:NL:PHR:2023:1486",
    "date": "2023-09-11",
    "summary": "Decision regarding contract law interpretation in context of case 1486...",
    "domain": "Constitutional",
    "citations": 17
  },
  {
    "id": "1307",
    "ecli": "ECLI:NL:RB:2024:8170",
    "date": "2024-05-28",
    "summary": "Judgment regarding consumer protection laws in context of case 8170...",
    "domain": "Administrative",
    "citations": 86
  },
  {
    "id": "1308",
    "ecli": "ECLI:NL:PHR:2021:2027",
    "date": "2021-11-26",
    "summary": "Judgment on intellectual property rights in context of case 2027...",
    "domain": "Administrative",
    "citations": 67
  },
  {
    "id": "1309",
    "ecli": "ECLI:EU:C:2021:6258",
    "date": "2021-02-12",
    "summary": "Ruling on environmental regulations compliance in context of case 6258...",
    "domain": "Familial",
    "citations": 52
  },
  {
    "id": "1310",
    "ecli": "ECLI:ECHR:2021:7407",
    "date": "2021-06-21",
    "summary": "Interpretation of maritime law in context of case 7407...",
    "domain": "Criminal",
    "citations": 71
  },
  {
    "id": "1311",
    "ecli": "ECLI:NL:HR:2021:6184",
    "date": "2021-11-10",
    "summary": "Interpretation of maritime law in context of case 6184...",
    "domain": "Constitutional",
    "citations": 41
  },
  {
    "id": "1312",
    "ecli": "ECLI:NL:HR:2020:1957",
    "date": "2020-07-26",
    "summary": "Judgment on intellectual property rights in context of case 1957...",
    "domain": "Administrative",
    "citations": 35
  },
  {
    "id": "1313",
    "ecli": "ECLI:ECHR:2020:3303",
    "date": "2020-07-15",
    "summary": "Judgment on intellectual property rights in context of case 3303...",
    "domain": "Familial",
    "citations": 83
  },
  {
    "id": "1314",
    "ecli": "ECLI:NL:PHR:2024:6888",
    "date": "2024-12-26",
    "summary": "Judgment on intellectual property rights in context of case 6888...",
    "domain": "Criminal",
    "citations": 70
  },
  {
    "id": "1315",
    "ecli": "ECLI:NL:PHR:2023:0081",
    "date": "2023-03-24",
    "summary": "Ruling on antitrust and competition in context of case 0081...",
    "domain": "Civil",
    "citations": 85
  },
  {
    "id": "1316",
    "ecli": "ECLI:NL:HR:2023:3408",
    "date": "2023-10-03",
    "summary": "Advisory opinion on criminal procedure in context of case 3408...",
    "domain": "Familial",
    "citations": 45
  },
  {
    "id": "1317",
    "ecli": "ECLI:NL:GH:2023:6532",
    "date": "2023-08-20",
    "summary": "Ruling on antitrust and competition in context of case 6532...",
    "domain": "Criminal",
    "citations": 12
  },
  {
    "id": "1318",
    "ecli": "ECLI:NL:HR:2024:8587",
    "date": "2024-09-16",
    "summary": "Decision regarding contract law interpretation in context of case 8587...",
    "domain": "Administrative",
    "citations": 99
  },
  {
    "id": "1319",
    "ecli": "ECLI:NL:RB:2023:8495",
    "date": "2023-07-21",
    "summary": "Preliminary ruling on data protection in context of case 8495...",
    "domain": "Administrative",
    "citations": 67
  },
  {
    "id": "1320",
    "ecli": "ECLI:EU:C:2021:0791",
    "date": "2021-11-04",
    "summary": "Ruling on environmental regulations compliance in context of case 0791...",
    "domain": "Administrative",
    "citations": 20
  },
  {
    "id": "1321",
    "ecli": "ECLI:ECHR:2023:0937",
    "date": "2023-01-25",
    "summary": "Ruling on environmental regulations compliance in context of case 0937...",
    "domain": "International",
    "citations": 81
  },
  {
    "id": "1322",
    "ecli": "ECLI:ECHR:2024:8001",
    "date": "2024-08-22",
    "summary": "Ruling on antitrust and competition in context of case 8001...",
    "domain": "International",
    "citations": 23
  },
  {
    "id": "1323",
    "ecli": "ECLI:NL:RB:2024:7231",
    "date": "2024-03-27",
    "summary": "Judgment regarding consumer protection laws in context of case 7231...",
    "domain": "Civil",
    "citations": 34
  },
  {
    "id": "1324",
    "ecli": "ECLI:ECHR:2023:7588",
    "date": "2023-02-15",
    "summary": "Case concerning labor law disputes in context of case 7588...",
    "domain": "Familial",
    "citations": 65
  },
  {
    "id": "1325",
    "ecli": "ECLI:NL:GH:2023:1081",
    "date": "2023-06-09",
    "summary": "Preliminary ruling on data protection in context of case 1081...",
    "domain": "Civil",
    "citations": 67
  },
  {
    "id": "1326",
    "ecli": "ECLI:NL:PHR:2024:4317",
    "date": "2024-10-23",
    "summary": "Case concerning labor law disputes in context of case 4317...",
    "domain": "Constitutional",
    "citations": 93
  },
  {
    "id": "1327",
    "ecli": "ECLI:NL:HR:2020:6029",
    "date": "2020-07-11",
    "summary": "Judgment regarding consumer protection laws in context of case 6029...",
    "domain": "Administrative",
    "citations": 90
  },
  {
    "id": "1328",
    "ecli": "ECLI:NL:RB:2023:6741",
    "date": "2023-08-23",
    "summary": "Interpretation of maritime law in context of case 6741...",
    "domain": "Administrative",
    "citations": 47
  },
  {
    "id": "1329",
    "ecli": "ECLI:NL:PHR:2021:0334",
    "date": "2021-04-27",
    "summary": "Judgment regarding consumer protection laws in context of case 0334...",
    "domain": "Constitutional",
    "citations": 37
  },
  {
    "id": "1330",
    "ecli": "ECLI:ECHR:2024:3564",
    "date": "2024-11-02",
    "summary": "Case concerning labor law disputes in context of case 3564...",
    "domain": "International",
    "citations": 96
  },
  {
    "id": "1331",
    "ecli": "ECLI:NL:PHR:2024:4320",
    "date": "2024-01-25",
    "summary": "Case concerning labor law disputes in context of case 4320...",
    "domain": "Constitutional",
    "citations": 23
  },
  {
    "id": "1332",
    "ecli": "ECLI:NL:GH:2022:5392",
    "date": "2022-09-24",
    "summary": "Decision regarding contract law interpretation in context of case 5392...",
    "domain": "International",
    "citations": 4
  },
  {
    "id": "1333",
    "ecli": "ECLI:NL:GH:2024:3253",
    "date": "2024-01-05",
    "summary": "Advisory opinion on criminal procedure in context of case 3253...",
    "domain": "Constitutional",
    "citations": 95
  },
  {
    "id": "1334",
    "ecli": "ECLI:NL:PHR:2024:1524",
    "date": "2024-03-26",
    "summary": "Advisory opinion on criminal procedure in context of case 1524...",
    "domain": "Constitutional",
    "citations": 9
  },
  {
    "id": "1335",
    "ecli": "ECLI:NL:GH:2024:1949",
    "date": "2024-04-07",
    "summary": "Ruling on antitrust and competition in context of case 1949...",
    "domain": "Administrative",
    "citations": 89
  },
  {
    "id": "1336",
    "ecli": "ECLI:NL:HR:2020:9452",
    "date": "2020-05-22",
    "summary": "Decision on human rights violations in context of case 9452...",
    "domain": "Criminal",
    "citations": 50
  },
  {
    "id": "1337",
    "ecli": "ECLI:EU:C:2023:3659",
    "date": "2023-08-12",
    "summary": "Decision regarding contract law interpretation in context of case 3659...",
    "domain": "Familial",
    "citations": 87
  },
  {
    "id": "1338",
    "ecli": "ECLI:NL:RB:2024:9918",
    "date": "2024-12-09",
    "summary": "Advisory opinion on criminal procedure in context of case 9918...",
    "domain": "Civil",
    "citations": 38
  },
  {
    "id": "1339",
    "ecli": "ECLI:NL:GH:2022:5793",
    "date": "2022-05-18",
    "summary": "Interpretation of maritime law in context of case 5793...",
    "domain": "Civil",
    "citations": 91
  },
  {
    "id": "1340",
    "ecli": "ECLI:ECHR:2022:7013",
    "date": "2022-05-28",
    "summary": "Judgment on intellectual property rights in context of case 7013...",
    "domain": "International",
    "citations": 49
  },
  {
    "id": "1341",
    "ecli": "ECLI:NL:RB:2022:5902",
    "date": "2022-07-20",
    "summary": "Ruling on environmental regulations compliance in context of case 5902...",
    "domain": "Civil",
    "citations": 27
  },
  {
    "id": "1342",
    "ecli": "ECLI:NL:HR:2023:4288",
    "date": "2023-07-18",
    "summary": "Judgment regarding consumer protection laws in context of case 4288...",
    "domain": "International",
    "citations": 92
  },
  {
    "id": "1343",
    "ecli": "ECLI:NL:RB:2024:6760",
    "date": "2024-08-18",
    "summary": "Decision on human rights violations in context of case 6760...",
    "domain": "Criminal",
    "citations": 93
  },
  {
    "id": "1344",
    "ecli": "ECLI:ECHR:2020:4055",
    "date": "2020-03-10",
    "summary": "Ruling on environmental regulations compliance in context of case 4055...",
    "domain": "International",
    "citations": 10
  },
  {
    "id": "1345",
    "ecli": "ECLI:NL:RB:2022:2793",
    "date": "2022-10-15",
    "summary": "Case concerning labor law disputes in context of case 2793...",
    "domain": "Criminal",
    "citations": 84
  },
  {
    "id": "1346",
    "ecli": "ECLI:EU:C:2020:1142",
    "date": "2020-11-15",
    "summary": "Preliminary ruling on data protection in context of case 1142...",
    "domain": "Constitutional",
    "citations": 64
  },
  {
    "id": "1347",
    "ecli": "ECLI:EU:C:2024:1889",
    "date": "2024-12-14",
    "summary": "Judgment regarding consumer protection laws in context of case 1889...",
    "domain": "Constitutional",
    "citations": 45
  },
  {
    "id": "1348",
    "ecli": "ECLI:EU:C:2024:7858",
    "date": "2024-04-07",
    "summary": "Interpretation of maritime law in context of case 7858...",
    "domain": "Administrative",
    "citations": 61
  },
  {
    "id": "1349",
    "ecli": "ECLI:NL:HR:2020:3333",
    "date": "2020-07-18",
    "summary": "Judgment regarding consumer protection laws in context of case 3333...",
    "domain": "International",
    "citations": 50
  },
  {
    "id": "1350",
    "ecli": "ECLI:NL:GH:2022:2335",
    "date": "2022-07-04",
    "summary": "Ruling on antitrust and competition in context of case 2335...",
    "domain": "International",
    "citations": 36
  },
  {
    "id": "1351",
    "ecli": "ECLI:NL:PHR:2021:6740",
    "date": "2021-02-21",
    "summary": "Ruling on antitrust and competition in context of case 6740...",
    "domain": "Civil",
    "citations": 94
  },
  {
    "id": "1352",
    "ecli": "ECLI:ECHR:2021:5555",
    "date": "2021-09-22",
    "summary": "Judgment regarding consumer protection laws in context of case 5555...",
    "domain": "Familial",
    "citations": 82
  },
  {
    "id": "1353",
    "ecli": "ECLI:NL:RB:2020:8793",
    "date": "2020-08-20",
    "summary": "Decision regarding contract law interpretation in context of case 8793...",
    "domain": "International",
    "citations": 31
  },
  {
    "id": "1354",
    "ecli": "ECLI:NL:RB:2024:2876",
    "date": "2024-06-13",
    "summary": "Judgment regarding consumer protection laws in context of case 2876...",
    "domain": "International",
    "citations": 17
  },
  {
    "id": "1355",
    "ecli": "ECLI:NL:PHR:2024:8936",
    "date": "2024-12-21",
    "summary": "Decision on human rights violations in context of case 8936...",
    "domain": "Constitutional",
    "citations": 60
  },
  {
    "id": "1356",
    "ecli": "ECLI:NL:HR:2024:0462",
    "date": "2024-05-17",
    "summary": "Ruling on environmental regulations compliance in context of case 0462...",
    "domain": "Constitutional",
    "citations": 45
  },
  {
    "id": "1357",
    "ecli": "ECLI:NL:RB:2024:3636",
    "date": "2024-09-06",
    "summary": "Judgment regarding consumer protection laws in context of case 3636...",
    "domain": "Criminal",
    "citations": 33
  },
  {
    "id": "1358",
    "ecli": "ECLI:NL:GH:2024:5516",
    "date": "2024-12-10",
    "summary": "Advisory opinion on criminal procedure in context of case 5516...",
    "domain": "International",
    "citations": 41
  },
  {
    "id": "1359",
    "ecli": "ECLI:EU:C:2020:6414",
    "date": "2020-09-25",
    "summary": "Ruling on environmental regulations compliance in context of case 6414...",
    "domain": "Civil",
    "citations": 77
  },
  {
    "id": "1360",
    "ecli": "ECLI:EU:C:2021:8377",
    "date": "2021-05-17",
    "summary": "Judgment on intellectual property rights in context of case 8377...",
    "domain": "Administrative",
    "citations": 80
  },
  {
    "id": "1361",
    "ecli": "ECLI:EU:C:2023:4494",
    "date": "2023-09-04",
    "summary": "Judgment on intellectual property rights in context of case 4494...",
    "domain": "International",
    "citations": 73
  },
  {
    "id": "1362",
    "ecli": "ECLI:NL:GH:2023:4507",
    "date": "2023-12-27",
    "summary": "Ruling on antitrust and competition in context of case 4507...",
    "domain": "Constitutional",
    "citations": 8
  },
  {
    "id": "1363",
    "ecli": "ECLI:NL:RB:2022:8804",
    "date": "2022-06-03",
    "summary": "Advisory opinion on criminal procedure in context of case 8804...",
    "domain": "Administrative",
    "citations": 88
  },
  {
    "id": "1364",
    "ecli": "ECLI:NL:PHR:2021:9217",
    "date": "2021-03-08",
    "summary": "Ruling on environmental regulations compliance in context of case 9217...",
    "domain": "Criminal",
    "citations": 82
  },
  {
    "id": "1365",
    "ecli": "ECLI:NL:PHR:2022:5304",
    "date": "2022-01-16",
    "summary": "Ruling on environmental regulations compliance in context of case 5304...",
    "domain": "International",
    "citations": 92
  },
  {
    "id": "1366",
    "ecli": "ECLI:NL:HR:2021:6796",
    "date": "2021-09-22",
    "summary": "Judgment on intellectual property rights in context of case 6796...",
    "domain": "Administrative",
    "citations": 28
  },
  {
    "id": "1367",
    "ecli": "ECLI:NL:RB:2023:5356",
    "date": "2023-08-17",
    "summary": "Decision on human rights violations in context of case 5356...",
    "domain": "Administrative",
    "citations": 54
  },
  {
    "id": "1368",
    "ecli": "ECLI:EU:C:2024:1880",
    "date": "2024-09-14",
    "summary": "Interpretation of maritime law in context of case 1880...",
    "domain": "Criminal",
    "citations": 56
  },
  {
    "id": "1369",
    "ecli": "ECLI:ECHR:2024:0835",
    "date": "2024-03-16",
    "summary": "Case concerning labor law disputes in context of case 0835...",
    "domain": "Criminal",
    "citations": 75
  },
  {
    "id": "1370",
    "ecli": "ECLI:NL:RB:2023:0038",
    "date": "2023-07-14",
    "summary": "Judgment on intellectual property rights in context of case 0038...",
    "domain": "Administrative",
    "citations": 4
  },
  {
    "id": "1371",
    "ecli": "ECLI:NL:RB:2023:5613",
    "date": "2023-08-06",
    "summary": "Advisory opinion on criminal procedure in context of case 5613...",
    "domain": "Administrative",
    "citations": 48
  },
  {
    "id": "1372",
    "ecli": "ECLI:NL:GH:2024:1666",
    "date": "2024-05-26",
    "summary": "Interpretation of maritime law in context of case 1666...",
    "domain": "Administrative",
    "citations": 25
  },
  {
    "id": "1373",
    "ecli": "ECLI:NL:PHR:2022:0242",
    "date": "2022-06-15",
    "summary": "Interpretation of maritime law in context of case 0242...",
    "domain": "International",
    "citations": 7
  },
  {
    "id": "1374",
    "ecli": "ECLI:NL:PHR:2023:6270",
    "date": "2023-11-01",
    "summary": "Preliminary ruling on data protection in context of case 6270...",
    "domain": "International",
    "citations": 39
  },
  {
    "id": "1375",
    "ecli": "ECLI:NL:GH:2020:3298",
    "date": "2020-10-23",
    "summary": "Case concerning labor law disputes in context of case 3298...",
    "domain": "Criminal",
    "citations": 94
  },
  {
    "id": "1376",
    "ecli": "ECLI:NL:HR:2024:4911",
    "date": "2024-05-13",
    "summary": "Judgment on intellectual property rights in context of case 4911...",
    "domain": "Criminal",
    "citations": 45
  },
  {
    "id": "1377",
    "ecli": "ECLI:NL:GH:2024:0105",
    "date": "2024-08-24",
    "summary": "Interpretation of maritime law in context of case 0105...",
    "domain": "Constitutional",
    "citations": 58
  },
  {
    "id": "1378",
    "ecli": "ECLI:NL:RB:2022:6583",
    "date": "2022-05-25",
    "summary": "Interpretation of maritime law in context of case 6583...",
    "domain": "Administrative",
    "citations": 33
  },
  {
    "id": "1379",
    "ecli": "ECLI:ECHR:2023:0666",
    "date": "2023-02-25",
    "summary": "Decision regarding contract law interpretation in context of case 0666...",
    "domain": "Administrative",
    "citations": 30
  },
  {
    "id": "1380",
    "ecli": "ECLI:ECHR:2021:1563",
    "date": "2021-06-03",
    "summary": "Interpretation of maritime law in context of case 1563...",
    "domain": "Civil",
    "citations": 21
  },
  {
    "id": "1381",
    "ecli": "ECLI:NL:HR:2021:6139",
    "date": "2021-05-17",
    "summary": "Ruling on antitrust and competition in context of case 6139...",
    "domain": "Criminal",
    "citations": 85
  },
  {
    "id": "1382",
    "ecli": "ECLI:NL:RB:2022:7320",
    "date": "2022-07-23",
    "summary": "Ruling on antitrust and competition in context of case 7320...",
    "domain": "International",
    "citations": 86
  },
  {
    "id": "1383",
    "ecli": "ECLI:EU:C:2024:6803",
    "date": "2024-07-10",
    "summary": "Judgment on intellectual property rights in context of case 6803...",
    "domain": "Familial",
    "citations": 26
  },
  {
    "id": "1384",
    "ecli": "ECLI:EU:C:2024:9397",
    "date": "2024-09-01",
    "summary": "Interpretation of maritime law in context of case 9397...",
    "domain": "Criminal",
    "citations": 74
  },
  {
    "id": "1385",
    "ecli": "ECLI:EU:C:2024:7800",
    "date": "2024-09-23",
    "summary": "Ruling on antitrust and competition in context of case 7800...",
    "domain": "Criminal",
    "citations": 3
  },
  {
    "id": "1386",
    "ecli": "ECLI:NL:HR:2023:5193",
    "date": "2023-11-12",
    "summary": "Advisory opinion on criminal procedure in context of case 5193...",
    "domain": "International",
    "citations": 47
  },
  {
    "id": "1387",
    "ecli": "ECLI:EU:C:2024:7962",
    "date": "2024-11-01",
    "summary": "Advisory opinion on criminal procedure in context of case 7962...",
    "domain": "Criminal",
    "citations": 60
  },
  {
    "id": "1388",
    "ecli": "ECLI:NL:GH:2020:6276",
    "date": "2020-10-27",
    "summary": "Judgment on intellectual property rights in context of case 6276...",
    "domain": "Civil",
    "citations": 36
  },
  {
    "id": "1389",
    "ecli": "ECLI:EU:C:2022:0711",
    "date": "2022-10-21",
    "summary": "Judgment on intellectual property rights in context of case 0711...",
    "domain": "Civil",
    "citations": 44
  },
  {
    "id": "1390",
    "ecli": "ECLI:NL:GH:2024:5450",
    "date": "2024-03-19",
    "summary": "Interpretation of maritime law in context of case 5450...",
    "domain": "Familial",
    "citations": 6
  },
  {
    "id": "1391",
    "ecli": "ECLI:NL:HR:2023:9597",
    "date": "2023-01-03",
    "summary": "Ruling on environmental regulations compliance in context of case 9597...",
    "domain": "Civil",
    "citations": 35
  },
  {
    "id": "1392",
    "ecli": "ECLI:NL:HR:2020:0205",
    "date": "2020-06-01",
    "summary": "Case concerning labor law disputes in context of case 0205...",
    "domain": "Civil",
    "citations": 3
  },
  {
    "id": "1393",
    "ecli": "ECLI:EU:C:2024:6068",
    "date": "2024-10-15",
    "summary": "Judgment regarding consumer protection laws in context of case 6068...",
    "domain": "Criminal",
    "citations": 18
  },
  {
    "id": "1394",
    "ecli": "ECLI:NL:PHR:2020:5649",
    "date": "2020-10-22",
    "summary": "Preliminary ruling on data protection in context of case 5649...",
    "domain": "Criminal",
    "citations": 6
  },
  {
    "id": "1395",
    "ecli": "ECLI:EU:C:2024:9387",
    "date": "2024-12-27",
    "summary": "Judgment regarding consumer protection laws in context of case 9387...",
    "domain": "Civil",
    "citations": 11
  },
  {
    "id": "1396",
    "ecli": "ECLI:NL:GH:2023:0006",
    "date": "2023-10-06",
    "summary": "Judgment regarding consumer protection laws in context of case 0006...",
    "domain": "Familial",
    "citations": 1
  },
  {
    "id": "1397",
    "ecli": "ECLI:NL:PHR:2022:9276",
    "date": "2022-01-27",
    "summary": "Decision regarding contract law interpretation in context of case 9276...",
    "domain": "Administrative",
    "citations": 43
  },
  {
    "id": "1398",
    "ecli": "ECLI:NL:HR:2023:9060",
    "date": "2023-06-01",
    "summary": "Judgment on intellectual property rights in context of case 9060...",
    "domain": "International",
    "citations": 27
  },
  {
    "id": "1399",
    "ecli": "ECLI:NL:HR:2020:3192",
    "date": "2020-10-22",
    "summary": "Decision on human rights violations in context of case 3192...",
    "domain": "International",
    "citations": 56
  },
  {
    "id": "1400",
    "ecli": "ECLI:NL:RB:2022:7439",
    "date": "2022-02-22",
    "summary": "Ruling on environmental regulations compliance in context of case 7439...",
    "domain": "Constitutional",
    "citations": 20
  },
  {
    "id": "1401",
    "ecli": "ECLI:NL:PHR:2022:2808",
    "date": "2022-04-16",
    "summary": "Ruling on environmental regulations compliance in context of case 2808...",
    "domain": "Civil",
    "citations": 41
  },
  {
    "id": "1402",
    "ecli": "ECLI:NL:PHR:2021:2738",
    "date": "2021-05-07",
    "summary": "Ruling on antitrust and competition in context of case 2738...",
    "domain": "Administrative",
    "citations": 23
  },
  {
    "id": "1403",
    "ecli": "ECLI:NL:PHR:2022:2546",
    "date": "2022-05-03",
    "summary": "Interpretation of maritime law in context of case 2546...",
    "domain": "Criminal",
    "citations": 73
  },
  {
    "id": "1404",
    "ecli": "ECLI:NL:RB:2022:7353",
    "date": "2022-11-13",
    "summary": "Judgment regarding consumer protection laws in context of case 7353...",
    "domain": "Civil",
    "citations": 95
  },
  {
    "id": "1405",
    "ecli": "ECLI:ECHR:2024:1871",
    "date": "2024-08-24",
    "summary": "Case concerning labor law disputes in context of case 1871...",
    "domain": "Criminal",
    "citations": 77
  },
  {
    "id": "1406",
    "ecli": "ECLI:EU:C:2024:0395",
    "date": "2024-07-24",
    "summary": "Preliminary ruling on data protection in context of case 0395...",
    "domain": "International",
    "citations": 51
  },
  {
    "id": "1407",
    "ecli": "ECLI:NL:RB:2024:0552",
    "date": "2024-12-09",
    "summary": "Judgment regarding consumer protection laws in context of case 0552...",
    "domain": "International",
    "citations": 66
  },
  {
    "id": "1408",
    "ecli": "ECLI:NL:HR:2021:3506",
    "date": "2021-12-11",
    "summary": "Ruling on antitrust and competition in context of case 3506...",
    "domain": "Familial",
    "citations": 82
  },
  {
    "id": "1409",
    "ecli": "ECLI:NL:HR:2021:7966",
    "date": "2021-08-14",
    "summary": "Advisory opinion on criminal procedure in context of case 7966...",
    "domain": "International",
    "citations": 39
  },
  {
    "id": "1410",
    "ecli": "ECLI:ECHR:2023:2863",
    "date": "2023-02-21",
    "summary": "Ruling on antitrust and competition in context of case 2863...",
    "domain": "Constitutional",
    "citations": 66
  },
  {
    "id": "1411",
    "ecli": "ECLI:ECHR:2020:4315",
    "date": "2020-08-20",
    "summary": "Ruling on antitrust and competition in context of case 4315...",
    "domain": "Criminal",
    "citations": 23
  },
  {
    "id": "1412",
    "ecli": "ECLI:NL:GH:2023:3906",
    "date": "2023-05-12",
    "summary": "Judgment on intellectual property rights in context of case 3906...",
    "domain": "International",
    "citations": 86
  },
  {
    "id": "1413",
    "ecli": "ECLI:EU:C:2020:7408",
    "date": "2020-09-07",
    "summary": "Advisory opinion on criminal procedure in context of case 7408...",
    "domain": "Constitutional",
    "citations": 76
  },
  {
    "id": "1414",
    "ecli": "ECLI:NL:GH:2021:1930",
    "date": "2021-05-22",
    "summary": "Judgment on intellectual property rights in context of case 1930...",
    "domain": "Constitutional",
    "citations": 57
  },
  {
    "id": "1415",
    "ecli": "ECLI:NL:RB:2023:9169",
    "date": "2023-12-16",
    "summary": "Ruling on antitrust and competition in context of case 9169...",
    "domain": "Civil",
    "citations": 65
  },
  {
    "id": "1416",
    "ecli": "ECLI:NL:RB:2023:2763",
    "date": "2023-01-06",
    "summary": "Preliminary ruling on data protection in context of case 2763...",
    "domain": "Criminal",
    "citations": 53
  },
  {
    "id": "1417",
    "ecli": "ECLI:NL:GH:2023:1079",
    "date": "2023-06-09",
    "summary": "Decision on human rights violations in context of case 1079...",
    "domain": "Familial",
    "citations": 22
  },
  {
    "id": "1418",
    "ecli": "ECLI:NL:HR:2024:9621",
    "date": "2024-09-11",
    "summary": "Decision regarding contract law interpretation in context of case 9621...",
    "domain": "Constitutional",
    "citations": 36
  },
  {
    "id": "1419",
    "ecli": "ECLI:NL:HR:2024:8794",
    "date": "2024-01-28",
    "summary": "Ruling on antitrust and competition in context of case 8794...",
    "domain": "Civil",
    "citations": 61
  },
  {
    "id": "1420",
    "ecli": "ECLI:NL:PHR:2021:5139",
    "date": "2021-06-28",
    "summary": "Case concerning labor law disputes in context of case 5139...",
    "domain": "International",
    "citations": 3
  },
  {
    "id": "1421",
    "ecli": "ECLI:NL:GH:2020:2787",
    "date": "2020-04-26",
    "summary": "Judgment regarding consumer protection laws in context of case 2787...",
    "domain": "Familial",
    "citations": 22
  },
  {
    "id": "1422",
    "ecli": "ECLI:NL:GH:2022:1153",
    "date": "2022-06-19",
    "summary": "Case concerning labor law disputes in context of case 1153...",
    "domain": "International",
    "citations": 50
  },
  {
    "id": "1423",
    "ecli": "ECLI:NL:HR:2024:7905",
    "date": "2024-05-08",
    "summary": "Advisory opinion on criminal procedure in context of case 7905...",
    "domain": "Civil",
    "citations": 26
  },
  {
    "id": "1424",
    "ecli": "ECLI:NL:PHR:2021:7899",
    "date": "2021-12-03",
    "summary": "Advisory opinion on criminal procedure in context of case 7899...",
    "domain": "Civil",
    "citations": 12
  },
  {
    "id": "1425",
    "ecli": "ECLI:NL:PHR:2023:5299",
    "date": "2023-08-26",
    "summary": "Preliminary ruling on data protection in context of case 5299...",
    "domain": "Criminal",
    "citations": 0
  },
  {
    "id": "1426",
    "ecli": "ECLI:NL:PHR:2022:6050",
    "date": "2022-12-24",
    "summary": "Interpretation of maritime law in context of case 6050...",
    "domain": "Criminal",
    "citations": 5
  },
  {
    "id": "1427",
    "ecli": "ECLI:NL:HR:2024:7311",
    "date": "2024-10-03",
    "summary": "Interpretation of maritime law in context of case 7311...",
    "domain": "Criminal",
    "citations": 78
  },
  {
    "id": "1428",
    "ecli": "ECLI:EU:C:2021:9149",
    "date": "2021-05-12",
    "summary": "Ruling on antitrust and competition in context of case 9149...",
    "domain": "Familial",
    "citations": 11
  },
  {
    "id": "1429",
    "ecli": "ECLI:NL:HR:2023:2771",
    "date": "2023-10-28",
    "summary": "Judgment regarding consumer protection laws in context of case 2771...",
    "domain": "Administrative",
    "citations": 38
  },
  {
    "id": "1430",
    "ecli": "ECLI:ECHR:2022:8847",
    "date": "2022-03-24",
    "summary": "Decision on human rights violations in context of case 8847...",
    "domain": "Constitutional",
    "citations": 85
  },
  {
    "id": "1431",
    "ecli": "ECLI:NL:PHR:2024:0915",
    "date": "2024-06-01",
    "summary": "Decision regarding contract law interpretation in context of case 0915...",
    "domain": "Constitutional",
    "citations": 59
  },
  {
    "id": "1432",
    "ecli": "ECLI:ECHR:2021:6364",
    "date": "2021-09-15",
    "summary": "Judgment on intellectual property rights in context of case 6364...",
    "domain": "Administrative",
    "citations": 6
  },
  {
    "id": "1433",
    "ecli": "ECLI:NL:GH:2023:9889",
    "date": "2023-04-01",
    "summary": "Decision on human rights violations in context of case 9889...",
    "domain": "International",
    "citations": 73
  },
  {
    "id": "1434",
    "ecli": "ECLI:EU:C:2023:6720",
    "date": "2023-01-19",
    "summary": "Ruling on antitrust and competition in context of case 6720...",
    "domain": "Administrative",
    "citations": 39
  },
  {
    "id": "1435",
    "ecli": "ECLI:EU:C:2024:0880",
    "date": "2024-12-26",
    "summary": "Interpretation of maritime law in context of case 0880...",
    "domain": "Civil",
    "citations": 57
  },
  {
    "id": "1436",
    "ecli": "ECLI:NL:PHR:2023:5086",
    "date": "2023-08-11",
    "summary": "Judgment regarding consumer protection laws in context of case 5086...",
    "domain": "Constitutional",
    "citations": 78
  },
  {
    "id": "1437",
    "ecli": "ECLI:NL:GH:2020:5548",
    "date": "2020-10-25",
    "summary": "Interpretation of maritime law in context of case 5548...",
    "domain": "Constitutional",
    "citations": 45
  },
  {
    "id": "1438",
    "ecli": "ECLI:EU:C:2022:9129",
    "date": "2022-03-17",
    "summary": "Case concerning labor law disputes in context of case 9129...",
    "domain": "Criminal",
    "citations": 90
  },
  {
    "id": "1439",
    "ecli": "ECLI:EU:C:2020:4112",
    "date": "2020-04-11",
    "summary": "Preliminary ruling on data protection in context of case 4112...",
    "domain": "Administrative",
    "citations": 7
  },
  {
    "id": "1440",
    "ecli": "ECLI:NL:RB:2024:8674",
    "date": "2024-02-02",
    "summary": "Preliminary ruling on data protection in context of case 8674...",
    "domain": "Criminal",
    "citations": 52
  },
  {
    "id": "1441",
    "ecli": "ECLI:NL:HR:2022:1064",
    "date": "2022-12-22",
    "summary": "Advisory opinion on criminal procedure in context of case 1064...",
    "domain": "Constitutional",
    "citations": 17
  },
  {
    "id": "1442",
    "ecli": "ECLI:EU:C:2024:8400",
    "date": "2024-07-15",
    "summary": "Judgment regarding consumer protection laws in context of case 8400...",
    "domain": "Constitutional",
    "citations": 89
  },
  {
    "id": "1443",
    "ecli": "ECLI:NL:HR:2024:1368",
    "date": "2024-01-19",
    "summary": "Interpretation of maritime law in context of case 1368...",
    "domain": "International",
    "citations": 69
  },
  {
    "id": "1444",
    "ecli": "ECLI:NL:RB:2022:7630",
    "date": "2022-03-07",
    "summary": "Decision on human rights violations in context of case 7630...",
    "domain": "Administrative",
    "citations": 81
  },
  {
    "id": "1445",
    "ecli": "ECLI:NL:GH:2023:5365",
    "date": "2023-04-13",
    "summary": "Ruling on antitrust and competition in context of case 5365...",
    "domain": "Familial",
    "citations": 36
  },
  {
    "id": "1446",
    "ecli": "ECLI:NL:RB:2021:8261",
    "date": "2021-05-21",
    "summary": "Judgment regarding consumer protection laws in context of case 8261...",
    "domain": "International",
    "citations": 12
  },
  {
    "id": "1447",
    "ecli": "ECLI:NL:GH:2023:5948",
    "date": "2023-04-10",
    "summary": "Case concerning labor law disputes in context of case 5948...",
    "domain": "Administrative",
    "citations": 47
  },
  {
    "id": "1448",
    "ecli": "ECLI:ECHR:2021:1444",
    "date": "2021-04-25",
    "summary": "Judgment on intellectual property rights in context of case 1444...",
    "domain": "Administrative",
    "citations": 97
  },
  {
    "id": "1449",
    "ecli": "ECLI:NL:HR:2023:4229",
    "date": "2023-07-21",
    "summary": "Decision on human rights violations in context of case 4229...",
    "domain": "Criminal",
    "citations": 84
  },
  {
    "id": "1450",
    "ecli": "ECLI:NL:RB:2021:4141",
    "date": "2021-08-12",
    "summary": "Judgment on intellectual property rights in context of case 4141...",
    "domain": "Administrative",
    "citations": 86
  },
  {
    "id": "1451",
    "ecli": "ECLI:NL:GH:2020:8698",
    "date": "2020-11-15",
    "summary": "Ruling on environmental regulations compliance in context of case 8698...",
    "domain": "Familial",
    "citations": 26
  },
  {
    "id": "1452",
    "ecli": "ECLI:EU:C:2021:9999",
    "date": "2021-09-06",
    "summary": "Interpretation of maritime law in context of case 9999...",
    "domain": "Administrative",
    "citations": 4
  },
  {
    "id": "1453",
    "ecli": "ECLI:NL:PHR:2023:0007",
    "date": "2023-03-22",
    "summary": "Interpretation of maritime law in context of case 0007...",
    "domain": "Civil",
    "citations": 18
  },
  {
    "id": "1454",
    "ecli": "ECLI:NL:PHR:2021:7188",
    "date": "2021-06-11",
    "summary": "Preliminary ruling on data protection in context of case 7188...",
    "domain": "Familial",
    "citations": 28
  },
  {
    "id": "1455",
    "ecli": "ECLI:NL:RB:2021:5109",
    "date": "2021-12-22",
    "summary": "Judgment regarding consumer protection laws in context of case 5109...",
    "domain": "Criminal",
    "citations": 58
  },
  {
    "id": "1456",
    "ecli": "ECLI:NL:RB:2022:5799",
    "date": "2022-01-10",
    "summary": "Interpretation of maritime law in context of case 5799...",
    "domain": "Civil",
    "citations": 17
  },
  {
    "id": "1457",
    "ecli": "ECLI:EU:C:2024:4863",
    "date": "2024-01-06",
    "summary": "Judgment on intellectual property rights in context of case 4863...",
    "domain": "Constitutional",
    "citations": 28
  },
  {
    "id": "1458",
    "ecli": "ECLI:NL:HR:2021:8315",
    "date": "2021-06-10",
    "summary": "Interpretation of maritime law in context of case 8315...",
    "domain": "Familial",
    "citations": 17
  },
  {
    "id": "1459",
    "ecli": "ECLI:NL:GH:2024:8830",
    "date": "2024-02-10",
    "summary": "Advisory opinion on criminal procedure in context of case 8830...",
    "domain": "Constitutional",
    "citations": 4
  },
  {
    "id": "1460",
    "ecli": "ECLI:NL:GH:2020:2515",
    "date": "2020-06-27",
    "summary": "Judgment on intellectual property rights in context of case 2515...",
    "domain": "Familial",
    "citations": 63
  },
  {
    "id": "1461",
    "ecli": "ECLI:NL:PHR:2023:0356",
    "date": "2023-05-03",
    "summary": "Case concerning labor law disputes in context of case 0356...",
    "domain": "Administrative",
    "citations": 5
  },
  {
    "id": "1462",
    "ecli": "ECLI:EU:C:2020:3512",
    "date": "2020-11-08",
    "summary": "Ruling on environmental regulations compliance in context of case 3512...",
    "domain": "Familial",
    "citations": 49
  },
  {
    "id": "1463",
    "ecli": "ECLI:ECHR:2023:9550",
    "date": "2023-01-08",
    "summary": "Judgment regarding consumer protection laws in context of case 9550...",
    "domain": "Administrative",
    "citations": 36
  },
  {
    "id": "1464",
    "ecli": "ECLI:ECHR:2024:8121",
    "date": "2024-08-21",
    "summary": "Advisory opinion on criminal procedure in context of case 8121...",
    "domain": "Civil",
    "citations": 68
  },
  {
    "id": "1465",
    "ecli": "ECLI:NL:PHR:2022:4548",
    "date": "2022-02-27",
    "summary": "Ruling on antitrust and competition in context of case 4548...",
    "domain": "Familial",
    "citations": 13
  },
  {
    "id": "1466",
    "ecli": "ECLI:EU:C:2024:3550",
    "date": "2024-02-05",
    "summary": "Advisory opinion on criminal procedure in context of case 3550...",
    "domain": "Criminal",
    "citations": 62
  },
  {
    "id": "1467",
    "ecli": "ECLI:NL:PHR:2023:8201",
    "date": "2023-11-13",
    "summary": "Decision regarding contract law interpretation in context of case 8201...",
    "domain": "International",
    "citations": 49
  },
  {
    "id": "1468",
    "ecli": "ECLI:NL:RB:2020:9414",
    "date": "2020-06-21",
    "summary": "Advisory opinion on criminal procedure in context of case 9414...",
    "domain": "International",
    "citations": 50
  },
  {
    "id": "1469",
    "ecli": "ECLI:NL:GH:2022:6301",
    "date": "2022-03-09",
    "summary": "Ruling on antitrust and competition in context of case 6301...",
    "domain": "Civil",
    "citations": 57
  },
  {
    "id": "1470",
    "ecli": "ECLI:NL:GH:2023:4504",
    "date": "2023-05-17",
    "summary": "Judgment on intellectual property rights in context of case 4504...",
    "domain": "International",
    "citations": 93
  },
  {
    "id": "1471",
    "ecli": "ECLI:NL:HR:2023:9810",
    "date": "2023-02-08",
    "summary": "Ruling on antitrust and competition in context of case 9810...",
    "domain": "Familial",
    "citations": 23
  },
  {
    "id": "1472",
    "ecli": "ECLI:NL:GH:2020:0201",
    "date": "2020-01-15",
    "summary": "Ruling on environmental regulations compliance in context of case 0201...",
    "domain": "Constitutional",
    "citations": 49
  },
  {
    "id": "1473",
    "ecli": "ECLI:NL:HR:2024:2509",
    "date": "2024-05-15",
    "summary": "Preliminary ruling on data protection in context of case 2509...",
    "domain": "Criminal",
    "citations": 6
  },
  {
    "id": "1474",
    "ecli": "ECLI:NL:RB:2023:3944",
    "date": "2023-04-03",
    "summary": "Advisory opinion on criminal procedure in context of case 3944...",
    "domain": "Familial",
    "citations": 53
  },
  {
    "id": "1475",
    "ecli": "ECLI:NL:GH:2022:5350",
    "date": "2022-07-03",
    "summary": "Judgment regarding consumer protection laws in context of case 5350...",
    "domain": "Civil",
    "citations": 92
  },
  {
    "id": "1476",
    "ecli": "ECLI:NL:PHR:2022:5859",
    "date": "2022-11-08",
    "summary": "Interpretation of maritime law in context of case 5859...",
    "domain": "Familial",
    "citations": 45
  },
  {
    "id": "1477",
    "ecli": "ECLI:ECHR:2023:6002",
    "date": "2023-01-04",
    "summary": "Decision on human rights violations in context of case 6002...",
    "domain": "Constitutional",
    "citations": 13
  },
  {
    "id": "1478",
    "ecli": "ECLI:NL:HR:2020:8161",
    "date": "2020-04-26",
    "summary": "Interpretation of maritime law in context of case 8161...",
    "domain": "Criminal",
    "citations": 40
  },
  {
    "id": "1479",
    "ecli": "ECLI:NL:RB:2020:3205",
    "date": "2020-05-28",
    "summary": "Ruling on environmental regulations compliance in context of case 3205...",
    "domain": "Constitutional",
    "citations": 21
  },
  {
    "id": "1480",
    "ecli": "ECLI:ECHR:2023:2056",
    "date": "2023-08-15",
    "summary": "Judgment on intellectual property rights in context of case 2056...",
    "domain": "International",
    "citations": 75
  },
  {
    "id": "1481",
    "ecli": "ECLI:NL:RB:2024:6529",
    "date": "2024-12-17",
    "summary": "Judgment regarding consumer protection laws in context of case 6529...",
    "domain": "Constitutional",
    "citations": 66
  },
  {
    "id": "1482",
    "ecli": "ECLI:NL:PHR:2021:7973",
    "date": "2021-06-22",
    "summary": "Preliminary ruling on data protection in context of case 7973...",
    "domain": "Civil",
    "citations": 16
  },
  {
    "id": "1483",
    "ecli": "ECLI:NL:HR:2020:1928",
    "date": "2020-12-25",
    "summary": "Ruling on antitrust and competition in context of case 1928...",
    "domain": "Familial",
    "citations": 44
  },
  {
    "id": "1484",
    "ecli": "ECLI:NL:RB:2022:9645",
    "date": "2022-05-17",
    "summary": "Judgment regarding consumer protection laws in context of case 9645...",
    "domain": "Constitutional",
    "citations": 82
  },
  {
    "id": "1485",
    "ecli": "ECLI:NL:PHR:2022:3068",
    "date": "2022-09-04",
    "summary": "Ruling on antitrust and competition in context of case 3068...",
    "domain": "Familial",
    "citations": 79
  },
  {
    "id": "1486",
    "ecli": "ECLI:NL:PHR:2023:0267",
    "date": "2023-07-23",
    "summary": "Judgment on intellectual property rights in context of case 0267...",
    "domain": "Familial",
    "citations": 96
  },
  {
    "id": "1487",
    "ecli": "ECLI:EU:C:2021:5847",
    "date": "2021-10-18",
    "summary": "Preliminary ruling on data protection in context of case 5847...",
    "domain": "Familial",
    "citations": 37
  },
  {
    "id": "1488",
    "ecli": "ECLI:NL:PHR:2024:9237",
    "date": "2024-12-25",
    "summary": "Judgment regarding consumer protection laws in context of case 9237...",
    "domain": "Administrative",
    "citations": 93
  },
  {
    "id": "1489",
    "ecli": "ECLI:ECHR:2020:5448",
    "date": "2020-01-27",
    "summary": "Preliminary ruling on data protection in context of case 5448...",
    "domain": "Constitutional",
    "citations": 66
  },
  {
    "id": "1490",
    "ecli": "ECLI:NL:GH:2020:6401",
    "date": "2020-07-05",
    "summary": "Case concerning labor law disputes in context of case 6401...",
    "domain": "International",
    "citations": 52
  },
  {
    "id": "1491",
    "ecli": "ECLI:NL:PHR:2024:5734",
    "date": "2024-02-14",
    "summary": "Decision on human rights violations in context of case 5734...",
    "domain": "Constitutional",
    "citations": 6
  },
  {
    "id": "1492",
    "ecli": "ECLI:NL:RB:2024:6827",
    "date": "2024-12-07",
    "summary": "Interpretation of maritime law in context of case 6827...",
    "domain": "International",
    "citations": 25
  },
  {
    "id": "1493",
    "ecli": "ECLI:NL:RB:2021:2836",
    "date": "2021-07-11",
    "summary": "Ruling on antitrust and competition in context of case 2836...",
    "domain": "International",
    "citations": 26
  },
  {
    "id": "1494",
    "ecli": "ECLI:EU:C:2020:3665",
    "date": "2020-05-04",
    "summary": "Interpretation of maritime law in context of case 3665...",
    "domain": "Criminal",
    "citations": 94
  },
  {
    "id": "1495",
    "ecli": "ECLI:NL:GH:2022:8082",
    "date": "2022-01-21",
    "summary": "Judgment regarding consumer protection laws in context of case 8082...",
    "domain": "Constitutional",
    "citations": 84
  },
  {
    "id": "1496",
    "ecli": "ECLI:NL:HR:2024:7599",
    "date": "2024-05-01",
    "summary": "Decision on human rights violations in context of case 7599...",
    "domain": "Familial",
    "citations": 38
  },
  {
    "id": "1497",
    "ecli": "ECLI:NL:GH:2022:9230",
    "date": "2022-07-04",
    "summary": "Decision on human rights violations in context of case 9230...",
    "domain": "Civil",
    "citations": 95
  },
  {
    "id": "1498",
    "ecli": "ECLI:ECHR:2024:2075",
    "date": "2024-10-02",
    "summary": "Interpretation of maritime law in context of case 2075...",
    "domain": "Criminal",
    "citations": 21
  },
  {
    "id": "1499",
    "ecli": "ECLI:NL:PHR:2021:4897",
    "date": "2021-03-17",
    "summary": "Ruling on environmental regulations compliance in context of case 4897...",
    "domain": "Constitutional",
    "citations": 80
  },
  {
    "id": "1500",
    "ecli": "ECLI:NL:PHR:2021:0109",
    "date": "2021-11-26",
    "summary": "Preliminary ruling on data protection in context of case 0109...",
    "domain": "Administrative",
    "citations": 82
  },
  {
    "id": "1501",
    "ecli": "ECLI:ECHR:2021:6605",
    "date": "2021-12-11",
    "summary": "Ruling on antitrust and competition in context of case 6605...",
    "domain": "Constitutional",
    "citations": 91
  },
  {
    "id": "1502",
    "ecli": "ECLI:NL:PHR:2020:4386",
    "date": "2020-02-24",
    "summary": "Decision on human rights violations in context of case 4386...",
    "domain": "Constitutional",
    "citations": 16
  },
  {
    "id": "1503",
    "ecli": "ECLI:NL:PHR:2023:2171",
    "date": "2023-01-09",
    "summary": "Case concerning labor law disputes in context of case 2171...",
    "domain": "Constitutional",
    "citations": 50
  },
  {
    "id": "1504",
    "ecli": "ECLI:NL:PHR:2022:1976",
    "date": "2022-04-06",
    "summary": "Judgment on intellectual property rights in context of case 1976...",
    "domain": "Administrative",
    "citations": 77
  },
  {
    "id": "1505",
    "ecli": "ECLI:NL:HR:2021:0659",
    "date": "2021-10-08",
    "summary": "Judgment on intellectual property rights in context of case 0659...",
    "domain": "International",
    "citations": 24
  },
  {
    "id": "1506",
    "ecli": "ECLI:ECHR:2023:4813",
    "date": "2023-04-23",
    "summary": "Decision regarding contract law interpretation in context of case 4813...",
    "domain": "International",
    "citations": 43
  },
  {
    "id": "1507",
    "ecli": "ECLI:EU:C:2024:5127",
    "date": "2024-07-24",
    "summary": "Case concerning labor law disputes in context of case 5127...",
    "domain": "International",
    "citations": 28
  },
  {
    "id": "1508",
    "ecli": "ECLI:NL:HR:2021:4949",
    "date": "2021-02-28",
    "summary": "Decision regarding contract law interpretation in context of case 4949...",
    "domain": "Constitutional",
    "citations": 4
  },
  {
    "id": "1509",
    "ecli": "ECLI:NL:RB:2020:4252",
    "date": "2020-11-17",
    "summary": "Decision regarding contract law interpretation in context of case 4252...",
    "domain": "Criminal",
    "citations": 93
  },
  {
    "id": "1510",
    "ecli": "ECLI:ECHR:2020:8379",
    "date": "2020-08-01",
    "summary": "Decision regarding contract law interpretation in context of case 8379...",
    "domain": "Administrative",
    "citations": 35
  },
  {
    "id": "1511",
    "ecli": "ECLI:NL:PHR:2021:7085",
    "date": "2021-07-10",
    "summary": "Advisory opinion on criminal procedure in context of case 7085...",
    "domain": "Familial",
    "citations": 21
  },
  {
    "id": "1512",
    "ecli": "ECLI:EU:C:2022:7974",
    "date": "2022-01-07",
    "summary": "Ruling on antitrust and competition in context of case 7974...",
    "domain": "Criminal",
    "citations": 56
  },
  {
    "id": "1513",
    "ecli": "ECLI:NL:PHR:2021:4976",
    "date": "2021-12-10",
    "summary": "Decision regarding contract law interpretation in context of case 4976...",
    "domain": "International",
    "citations": 16
  },
  {
    "id": "1514",
    "ecli": "ECLI:ECHR:2020:2768",
    "date": "2020-06-13",
    "summary": "Preliminary ruling on data protection in context of case 2768...",
    "domain": "Constitutional",
    "citations": 4
  },
  {
    "id": "1515",
    "ecli": "ECLI:NL:PHR:2022:3894",
    "date": "2022-01-01",
    "summary": "Judgment on intellectual property rights in context of case 3894...",
    "domain": "International",
    "citations": 45
  },
  {
    "id": "1516",
    "ecli": "ECLI:NL:PHR:2021:0743",
    "date": "2021-11-08",
    "summary": "Judgment regarding consumer protection laws in context of case 0743...",
    "domain": "Familial",
    "citations": 33
  },
  {
    "id": "1517",
    "ecli": "ECLI:EU:C:2022:5414",
    "date": "2022-07-07",
    "summary": "Advisory opinion on criminal procedure in context of case 5414...",
    "domain": "International",
    "citations": 71
  },
  {
    "id": "1518",
    "ecli": "ECLI:NL:PHR:2024:0306",
    "date": "2024-12-04",
    "summary": "Ruling on environmental regulations compliance in context of case 0306...",
    "domain": "Constitutional",
    "citations": 69
  },
  {
    "id": "1519",
    "ecli": "ECLI:NL:GH:2023:4642",
    "date": "2023-01-27",
    "summary": "Advisory opinion on criminal procedure in context of case 4642...",
    "domain": "Constitutional",
    "citations": 65
  },
  {
    "id": "1520",
    "ecli": "ECLI:NL:HR:2021:1463",
    "date": "2021-05-05",
    "summary": "Case concerning labor law disputes in context of case 1463...",
    "domain": "Constitutional",
    "citations": 68
  },
  {
    "id": "1521",
    "ecli": "ECLI:NL:HR:2021:6615",
    "date": "2021-03-15",
    "summary": "Judgment regarding consumer protection laws in context of case 6615...",
    "domain": "Administrative",
    "citations": 2
  },
  {
    "id": "1522",
    "ecli": "ECLI:NL:RB:2024:0312",
    "date": "2024-09-17",
    "summary": "Judgment regarding consumer protection laws in context of case 0312...",
    "domain": "Familial",
    "citations": 84
  },
  {
    "id": "1523",
    "ecli": "ECLI:NL:HR:2022:2259",
    "date": "2022-07-18",
    "summary": "Preliminary ruling on data protection in context of case 2259...",
    "domain": "Civil",
    "citations": 27
  },
  {
    "id": "1524",
    "ecli": "ECLI:NL:RB:2024:1112",
    "date": "2024-06-10",
    "summary": "Judgment on intellectual property rights in context of case 1112...",
    "domain": "Criminal",
    "citations": 54
  },
  {
    "id": "1525",
    "ecli": "ECLI:ECHR:2023:0030",
    "date": "2023-11-14",
    "summary": "Preliminary ruling on data protection in context of case 0030...",
    "domain": "Constitutional",
    "citations": 1
  },
  {
    "id": "1526",
    "ecli": "ECLI:NL:PHR:2020:1701",
    "date": "2020-07-11",
    "summary": "Preliminary ruling on data protection in context of case 1701...",
    "domain": "Familial",
    "citations": 87
  },
  {
    "id": "1527",
    "ecli": "ECLI:NL:RB:2021:7697",
    "date": "2021-11-18",
    "summary": "Case concerning labor law disputes in context of case 7697...",
    "domain": "Administrative",
    "citations": 40
  },
  {
    "id": "1528",
    "ecli": "ECLI:EU:C:2022:0160",
    "date": "2022-02-02",
    "summary": "Ruling on environmental regulations compliance in context of case 0160...",
    "domain": "Administrative",
    "citations": 87
  },
  {
    "id": "1529",
    "ecli": "ECLI:NL:PHR:2024:2737",
    "date": "2024-08-02",
    "summary": "Case concerning labor law disputes in context of case 2737...",
    "domain": "Civil",
    "citations": 43
  },
  {
    "id": "1530",
    "ecli": "ECLI:EU:C:2024:1380",
    "date": "2024-08-05",
    "summary": "Ruling on environmental regulations compliance in context of case 1380...",
    "domain": "Constitutional",
    "citations": 64
  },
  {
    "id": "1531",
    "ecli": "ECLI:NL:PHR:2021:9818",
    "date": "2021-01-28",
    "summary": "Decision on human rights violations in context of case 9818...",
    "domain": "International",
    "citations": 50
  },
  {
    "id": "1532",
    "ecli": "ECLI:EU:C:2022:3124",
    "date": "2022-01-23",
    "summary": "Case concerning labor law disputes in context of case 3124...",
    "domain": "Criminal",
    "citations": 43
  },
  {
    "id": "1533",
    "ecli": "ECLI:NL:HR:2022:9541",
    "date": "2022-06-21",
    "summary": "Ruling on antitrust and competition in context of case 9541...",
    "domain": "Criminal",
    "citations": 96
  },
  {
    "id": "1534",
    "ecli": "ECLI:NL:PHR:2020:9570",
    "date": "2020-01-02",
    "summary": "Case concerning labor law disputes in context of case 9570...",
    "domain": "Constitutional",
    "citations": 34
  },
  {
    "id": "1535",
    "ecli": "ECLI:EU:C:2024:1039",
    "date": "2024-10-16",
    "summary": "Judgment on intellectual property rights in context of case 1039...",
    "domain": "Civil",
    "citations": 82
  },
  {
    "id": "1536",
    "ecli": "ECLI:NL:HR:2022:3781",
    "date": "2022-03-13",
    "summary": "Ruling on antitrust and competition in context of case 3781...",
    "domain": "Constitutional",
    "citations": 6
  },
  {
    "id": "1537",
    "ecli": "ECLI:ECHR:2022:3191",
    "date": "2022-02-22",
    "summary": "Interpretation of maritime law in context of case 3191...",
    "domain": "Administrative",
    "citations": 51
  },
  {
    "id": "1538",
    "ecli": "ECLI:NL:PHR:2023:4792",
    "date": "2023-02-12",
    "summary": "Judgment regarding consumer protection laws in context of case 4792...",
    "domain": "Criminal",
    "citations": 80
  },
  {
    "id": "1539",
    "ecli": "ECLI:NL:HR:2021:4670",
    "date": "2021-06-12",
    "summary": "Judgment regarding consumer protection laws in context of case 4670...",
    "domain": "Familial",
    "citations": 34
  },
  {
    "id": "1540",
    "ecli": "ECLI:EU:C:2023:2774",
    "date": "2023-06-20",
    "summary": "Preliminary ruling on data protection in context of case 2774...",
    "domain": "International",
    "citations": 74
  },
  {
    "id": "1541",
    "ecli": "ECLI:NL:HR:2021:6016",
    "date": "2021-09-17",
    "summary": "Interpretation of maritime law in context of case 6016...",
    "domain": "Administrative",
    "citations": 93
  },
  {
    "id": "1542",
    "ecli": "ECLI:NL:GH:2023:8802",
    "date": "2023-12-22",
    "summary": "Decision on human rights violations in context of case 8802...",
    "domain": "Administrative",
    "citations": 60
  },
  {
    "id": "1543",
    "ecli": "ECLI:NL:GH:2020:9495",
    "date": "2020-11-23",
    "summary": "Advisory opinion on criminal procedure in context of case 9495...",
    "domain": "International",
    "citations": 34
  },
  {
    "id": "1544",
    "ecli": "ECLI:ECHR:2022:2456",
    "date": "2022-12-06",
    "summary": "Interpretation of maritime law in context of case 2456...",
    "domain": "Constitutional",
    "citations": 48
  },
  {
    "id": "1545",
    "ecli": "ECLI:EU:C:2022:3455",
    "date": "2022-06-12",
    "summary": "Ruling on environmental regulations compliance in context of case 3455...",
    "domain": "Criminal",
    "citations": 93
  },
  {
    "id": "1546",
    "ecli": "ECLI:NL:PHR:2021:8504",
    "date": "2021-11-15",
    "summary": "Advisory opinion on criminal procedure in context of case 8504...",
    "domain": "International",
    "citations": 83
  },
  {
    "id": "1547",
    "ecli": "ECLI:NL:HR:2023:9744",
    "date": "2023-10-18",
    "summary": "Decision on human rights violations in context of case 9744...",
    "domain": "Familial",
    "citations": 38
  },
  {
    "id": "1548",
    "ecli": "ECLI:NL:RB:2022:9863",
    "date": "2022-10-01",
    "summary": "Case concerning labor law disputes in context of case 9863...",
    "domain": "Civil",
    "citations": 52
  },
  {
    "id": "1549",
    "ecli": "ECLI:NL:RB:2022:1752",
    "date": "2022-03-21",
    "summary": "Judgment regarding consumer protection laws in context of case 1752...",
    "domain": "Constitutional",
    "citations": 24
  },
  {
    "id": "1550",
    "ecli": "ECLI:NL:GH:2023:7296",
    "date": "2023-05-03",
    "summary": "Interpretation of maritime law in context of case 7296...",
    "domain": "Civil",
    "citations": 13
  },
  {
    "id": "1551",
    "ecli": "ECLI:NL:RB:2023:6328",
    "date": "2023-08-13",
    "summary": "Decision on human rights violations in context of case 6328...",
    "domain": "Administrative",
    "citations": 35
  },
  {
    "id": "1552",
    "ecli": "ECLI:ECHR:2023:9535",
    "date": "2023-01-17",
    "summary": "Case concerning labor law disputes in context of case 9535...",
    "domain": "Familial",
    "citations": 25
  },
  {
    "id": "1553",
    "ecli": "ECLI:EU:C:2021:1206",
    "date": "2021-04-23",
    "summary": "Decision regarding contract law interpretation in context of case 1206...",
    "domain": "Constitutional",
    "citations": 39
  },
  {
    "id": "1554",
    "ecli": "ECLI:NL:HR:2024:5726",
    "date": "2024-11-14",
    "summary": "Judgment on intellectual property rights in context of case 5726...",
    "domain": "International",
    "citations": 98
  },
  {
    "id": "1555",
    "ecli": "ECLI:ECHR:2024:0619",
    "date": "2024-11-20",
    "summary": "Judgment regarding consumer protection laws in context of case 0619...",
    "domain": "Familial",
    "citations": 51
  },
  {
    "id": "1556",
    "ecli": "ECLI:NL:PHR:2024:1979",
    "date": "2024-04-21",
    "summary": "Judgment regarding consumer protection laws in context of case 1979...",
    "domain": "Criminal",
    "citations": 82
  },
  {
    "id": "1557",
    "ecli": "ECLI:NL:HR:2021:5815",
    "date": "2021-10-26",
    "summary": "Advisory opinion on criminal procedure in context of case 5815...",
    "domain": "Civil",
    "citations": 80
  },
  {
    "id": "1558",
    "ecli": "ECLI:NL:RB:2020:4568",
    "date": "2020-03-28",
    "summary": "Judgment on intellectual property rights in context of case 4568...",
    "domain": "International",
    "citations": 47
  },
  {
    "id": "1559",
    "ecli": "ECLI:NL:PHR:2020:6967",
    "date": "2020-07-21",
    "summary": "Decision on human rights violations in context of case 6967...",
    "domain": "Criminal",
    "citations": 28
  },
  {
    "id": "1560",
    "ecli": "ECLI:NL:RB:2021:3979",
    "date": "2021-08-08",
    "summary": "Decision regarding contract law interpretation in context of case 3979...",
    "domain": "International",
    "citations": 25
  },
  {
    "id": "1561",
    "ecli": "ECLI:NL:HR:2021:3149",
    "date": "2021-08-13",
    "summary": "Decision on human rights violations in context of case 3149...",
    "domain": "Constitutional",
    "citations": 31
  },
  {
    "id": "1562",
    "ecli": "ECLI:ECHR:2021:3996",
    "date": "2021-08-22",
    "summary": "Decision on human rights violations in context of case 3996...",
    "domain": "Familial",
    "citations": 10
  },
  {
    "id": "1563",
    "ecli": "ECLI:NL:RB:2022:0303",
    "date": "2022-07-19",
    "summary": "Ruling on antitrust and competition in context of case 0303...",
    "domain": "Constitutional",
    "citations": 52
  },
  {
    "id": "1564",
    "ecli": "ECLI:NL:PHR:2020:7828",
    "date": "2020-10-23",
    "summary": "Preliminary ruling on data protection in context of case 7828...",
    "domain": "Constitutional",
    "citations": 84
  },
  {
    "id": "1565",
    "ecli": "ECLI:NL:HR:2024:2966",
    "date": "2024-04-20",
    "summary": "Judgment regarding consumer protection laws in context of case 2966...",
    "domain": "Familial",
    "citations": 89
  },
  {
    "id": "1566",
    "ecli": "ECLI:NL:HR:2021:2961",
    "date": "2021-09-01",
    "summary": "Decision on human rights violations in context of case 2961...",
    "domain": "Criminal",
    "citations": 69
  },
  {
    "id": "1567",
    "ecli": "ECLI:NL:PHR:2020:9503",
    "date": "2020-09-07",
    "summary": "Judgment regarding consumer protection laws in context of case 9503...",
    "domain": "International",
    "citations": 5
  },
  {
    "id": "1568",
    "ecli": "ECLI:NL:RB:2021:8185",
    "date": "2021-11-23",
    "summary": "Judgment on intellectual property rights in context of case 8185...",
    "domain": "International",
    "citations": 87
  },
  {
    "id": "1569",
    "ecli": "ECLI:ECHR:2022:7035",
    "date": "2022-12-21",
    "summary": "Judgment regarding consumer protection laws in context of case 7035...",
    "domain": "Civil",
    "citations": 76
  },
  {
    "id": "1570",
    "ecli": "ECLI:ECHR:2024:4819",
    "date": "2024-02-17",
    "summary": "Decision regarding contract law interpretation in context of case 4819...",
    "domain": "Constitutional",
    "citations": 93
  },
  {
    "id": "1571",
    "ecli": "ECLI:NL:PHR:2024:4979",
    "date": "2024-12-05",
    "summary": "Interpretation of maritime law in context of case 4979...",
    "domain": "Constitutional",
    "citations": 36
  },
  {
    "id": "1572",
    "ecli": "ECLI:NL:HR:2024:4785",
    "date": "2024-06-14",
    "summary": "Decision on human rights violations in context of case 4785...",
    "domain": "Familial",
    "citations": 6
  },
  {
    "id": "1573",
    "ecli": "ECLI:NL:HR:2024:7315",
    "date": "2024-04-11",
    "summary": "Preliminary ruling on data protection in context of case 7315...",
    "domain": "Administrative",
    "citations": 92
  },
  {
    "id": "1574",
    "ecli": "ECLI:ECHR:2023:5791",
    "date": "2023-08-21",
    "summary": "Ruling on environmental regulations compliance in context of case 5791...",
    "domain": "Civil",
    "citations": 19
  },
  {
    "id": "1575",
    "ecli": "ECLI:ECHR:2020:6841",
    "date": "2020-12-04",
    "summary": "Judgment on intellectual property rights in context of case 6841...",
    "domain": "Civil",
    "citations": 87
  },
  {
    "id": "1576",
    "ecli": "ECLI:EU:C:2021:6558",
    "date": "2021-11-22",
    "summary": "Case concerning labor law disputes in context of case 6558...",
    "domain": "Constitutional",
    "citations": 62
  },
  {
    "id": "1577",
    "ecli": "ECLI:NL:RB:2021:0203",
    "date": "2021-06-03",
    "summary": "Judgment on intellectual property rights in context of case 0203...",
    "domain": "Administrative",
    "citations": 19
  },
  {
    "id": "1578",
    "ecli": "ECLI:NL:PHR:2020:3716",
    "date": "2020-05-09",
    "summary": "Decision on human rights violations in context of case 3716...",
    "domain": "Constitutional",
    "citations": 94
  },
  {
    "id": "1579",
    "ecli": "ECLI:NL:HR:2020:0534",
    "date": "2020-06-25",
    "summary": "Judgment regarding consumer protection laws in context of case 0534...",
    "domain": "Administrative",
    "citations": 86
  },
  {
    "id": "1580",
    "ecli": "ECLI:NL:PHR:2021:6627",
    "date": "2021-11-14",
    "summary": "Advisory opinion on criminal procedure in context of case 6627...",
    "domain": "Civil",
    "citations": 3
  },
  {
    "id": "1581",
    "ecli": "ECLI:NL:PHR:2021:9589",
    "date": "2021-06-06",
    "summary": "Judgment on intellectual property rights in context of case 9589...",
    "domain": "International",
    "citations": 1
  },
  {
    "id": "1582",
    "ecli": "ECLI:NL:HR:2023:1269",
    "date": "2023-12-02",
    "summary": "Ruling on environmental regulations compliance in context of case 1269...",
    "domain": "Criminal",
    "citations": 70
  },
  {
    "id": "1583",
    "ecli": "ECLI:NL:RB:2020:5591",
    "date": "2020-03-04",
    "summary": "Preliminary ruling on data protection in context of case 5591...",
    "domain": "Constitutional",
    "citations": 28
  },
  {
    "id": "1584",
    "ecli": "ECLI:EU:C:2020:2761",
    "date": "2020-09-01",
    "summary": "Judgment regarding consumer protection laws in context of case 2761...",
    "domain": "Civil",
    "citations": 77
  },
  {
    "id": "1585",
    "ecli": "ECLI:EU:C:2021:7529",
    "date": "2021-09-08",
    "summary": "Judgment on intellectual property rights in context of case 7529...",
    "domain": "Administrative",
    "citations": 41
  },
  {
    "id": "1586",
    "ecli": "ECLI:NL:RB:2021:6557",
    "date": "2021-05-23",
    "summary": "Judgment regarding consumer protection laws in context of case 6557...",
    "domain": "Administrative",
    "citations": 6
  },
  {
    "id": "1587",
    "ecli": "ECLI:EU:C:2020:6898",
    "date": "2020-07-13",
    "summary": "Case concerning labor law disputes in context of case 6898...",
    "domain": "Criminal",
    "citations": 96
  },
  {
    "id": "1588",
    "ecli": "ECLI:NL:RB:2020:5763",
    "date": "2020-02-27",
    "summary": "Decision regarding contract law interpretation in context of case 5763...",
    "domain": "International",
    "citations": 26
  },
  {
    "id": "1589",
    "ecli": "ECLI:NL:HR:2024:9385",
    "date": "2024-11-23",
    "summary": "Judgment regarding consumer protection laws in context of case 9385...",
    "domain": "Constitutional",
    "citations": 51
  },
  {
    "id": "1590",
    "ecli": "ECLI:NL:HR:2023:4862",
    "date": "2023-12-01",
    "summary": "Decision regarding contract law interpretation in context of case 4862...",
    "domain": "Administrative",
    "citations": 73
  },
  {
    "id": "1591",
    "ecli": "ECLI:ECHR:2023:4122",
    "date": "2023-09-22",
    "summary": "Interpretation of maritime law in context of case 4122...",
    "domain": "Civil",
    "citations": 67
  },
  {
    "id": "1592",
    "ecli": "ECLI:NL:RB:2020:6585",
    "date": "2020-06-15",
    "summary": "Advisory opinion on criminal procedure in context of case 6585...",
    "domain": "Civil",
    "citations": 82
  },
  {
    "id": "1593",
    "ecli": "ECLI:NL:PHR:2022:0991",
    "date": "2022-08-16",
    "summary": "Preliminary ruling on data protection in context of case 0991...",
    "domain": "Civil",
    "citations": 25
  },
  {
    "id": "1594",
    "ecli": "ECLI:ECHR:2023:5846",
    "date": "2023-04-25",
    "summary": "Judgment regarding consumer protection laws in context of case 5846...",
    "domain": "Civil",
    "citations": 54
  },
  {
    "id": "1595",
    "ecli": "ECLI:NL:HR:2021:5785",
    "date": "2021-08-15",
    "summary": "Case concerning labor law disputes in context of case 5785...",
    "domain": "International",
    "citations": 34
  },
  {
    "id": "1596",
    "ecli": "ECLI:NL:PHR:2024:8484",
    "date": "2024-04-11",
    "summary": "Ruling on environmental regulations compliance in context of case 8484...",
    "domain": "International",
    "citations": 83
  },
  {
    "id": "1597",
    "ecli": "ECLI:EU:C:2024:3741",
    "date": "2024-06-28",
    "summary": "Interpretation of maritime law in context of case 3741...",
    "domain": "International",
    "citations": 35
  },
  {
    "id": "1598",
    "ecli": "ECLI:NL:GH:2024:9384",
    "date": "2024-05-03",
    "summary": "Judgment on intellectual property rights in context of case 9384...",
    "domain": "Constitutional",
    "citations": 71
  },
  {
    "id": "1599",
    "ecli": "ECLI:NL:HR:2021:1352",
    "date": "2021-04-27",
    "summary": "Ruling on environmental regulations compliance in context of case 1352...",
    "domain": "Administrative",
    "citations": 67
  },
  {
    "id": "1600",
    "ecli": "ECLI:EU:C:2022:5772",
    "date": "2022-10-12",
    "summary": "Preliminary ruling on data protection in context of case 5772...",
    "domain": "Civil",
    "citations": 1
  },
  {
    "id": "1601",
    "ecli": "ECLI:NL:HR:2024:6615",
    "date": "2024-12-21",
    "summary": "Preliminary ruling on data protection in context of case 6615...",
    "domain": "International",
    "citations": 67
  },
  {
    "id": "1602",
    "ecli": "ECLI:NL:GH:2022:4882",
    "date": "2022-05-10",
    "summary": "Case concerning labor law disputes in context of case 4882...",
    "domain": "Administrative",
    "citations": 21
  },
  {
    "id": "1603",
    "ecli": "ECLI:NL:HR:2023:7657",
    "date": "2023-06-23",
    "summary": "Advisory opinion on criminal procedure in context of case 7657...",
    "domain": "Criminal",
    "citations": 86
  },
  {
    "id": "1604",
    "ecli": "ECLI:ECHR:2023:3176",
    "date": "2023-06-21",
    "summary": "Advisory opinion on criminal procedure in context of case 3176...",
    "domain": "Civil",
    "citations": 8
  },
  {
    "id": "1605",
    "ecli": "ECLI:NL:RB:2021:0028",
    "date": "2021-05-08",
    "summary": "Case concerning labor law disputes in context of case 0028...",
    "domain": "Administrative",
    "citations": 87
  },
  {
    "id": "1606",
    "ecli": "ECLI:EU:C:2024:6111",
    "date": "2024-08-28",
    "summary": "Decision on human rights violations in context of case 6111...",
    "domain": "Administrative",
    "citations": 19
  },
  {
    "id": "1607",
    "ecli": "ECLI:NL:GH:2021:0036",
    "date": "2021-07-15",
    "summary": "Advisory opinion on criminal procedure in context of case 0036...",
    "domain": "Constitutional",
    "citations": 82
  },
  {
    "id": "1608",
    "ecli": "ECLI:EU:C:2024:2639",
    "date": "2024-04-21",
    "summary": "Ruling on environmental regulations compliance in context of case 2639...",
    "domain": "Criminal",
    "citations": 15
  },
  {
    "id": "1609",
    "ecli": "ECLI:NL:PHR:2022:3713",
    "date": "2022-04-14",
    "summary": "Judgment on intellectual property rights in context of case 3713...",
    "domain": "Constitutional",
    "citations": 47
  },
  {
    "id": "1610",
    "ecli": "ECLI:NL:PHR:2022:5927",
    "date": "2022-11-01",
    "summary": "Decision on human rights violations in context of case 5927...",
    "domain": "Criminal",
    "citations": 60
  },
  {
    "id": "1611",
    "ecli": "ECLI:NL:PHR:2024:9981",
    "date": "2024-03-20",
    "summary": "Judgment on intellectual property rights in context of case 9981...",
    "domain": "Criminal",
    "citations": 91
  },
  {
    "id": "1612",
    "ecli": "ECLI:NL:RB:2023:2023",
    "date": "2023-06-08",
    "summary": "Decision on human rights violations in context of case 2023...",
    "domain": "Constitutional",
    "citations": 41
  },
  {
    "id": "1613",
    "ecli": "ECLI:ECHR:2024:2889",
    "date": "2024-09-12",
    "summary": "Case concerning labor law disputes in context of case 2889...",
    "domain": "Administrative",
    "citations": 33
  },
  {
    "id": "1614",
    "ecli": "ECLI:NL:PHR:2021:8009",
    "date": "2021-01-07",
    "summary": "Ruling on antitrust and competition in context of case 8009...",
    "domain": "International",
    "citations": 36
  },
  {
    "id": "1615",
    "ecli": "ECLI:NL:GH:2023:7792",
    "date": "2023-11-20",
    "summary": "Ruling on environmental regulations compliance in context of case 7792...",
    "domain": "International",
    "citations": 5
  },
  {
    "id": "1616",
    "ecli": "ECLI:NL:GH:2020:4823",
    "date": "2020-11-03",
    "summary": "Preliminary ruling on data protection in context of case 4823...",
    "domain": "International",
    "citations": 78
  },
  {
    "id": "1617",
    "ecli": "ECLI:ECHR:2024:8055",
    "date": "2024-01-20",
    "summary": "Decision on human rights violations in context of case 8055...",
    "domain": "Familial",
    "citations": 70
  },
  {
    "id": "1618",
    "ecli": "ECLI:NL:GH:2023:1117",
    "date": "2023-04-12",
    "summary": "Ruling on environmental regulations compliance in context of case 1117...",
    "domain": "Constitutional",
    "citations": 73
  },
  {
    "id": "1619",
    "ecli": "ECLI:NL:PHR:2020:1902",
    "date": "2020-08-05",
    "summary": "Preliminary ruling on data protection in context of case 1902...",
    "domain": "International",
    "citations": 59
  },
  {
    "id": "1620",
    "ecli": "ECLI:NL:PHR:2024:3015",
    "date": "2024-05-22",
    "summary": "Advisory opinion on criminal procedure in context of case 3015...",
    "domain": "Criminal",
    "citations": 50
  },
  {
    "id": "1621",
    "ecli": "ECLI:NL:PHR:2022:1803",
    "date": "2022-10-13",
    "summary": "Judgment regarding consumer protection laws in context of case 1803...",
    "domain": "Familial",
    "citations": 49
  },
  {
    "id": "1622",
    "ecli": "ECLI:NL:PHR:2023:0673",
    "date": "2023-12-20",
    "summary": "Decision on human rights violations in context of case 0673...",
    "domain": "Civil",
    "citations": 37
  },
  {
    "id": "1623",
    "ecli": "ECLI:NL:GH:2021:5582",
    "date": "2021-01-15",
    "summary": "Ruling on antitrust and competition in context of case 5582...",
    "domain": "Familial",
    "citations": 53
  },
  {
    "id": "1624",
    "ecli": "ECLI:NL:GH:2023:4484",
    "date": "2023-12-23",
    "summary": "Advisory opinion on criminal procedure in context of case 4484...",
    "domain": "Administrative",
    "citations": 0
  },
  {
    "id": "1625",
    "ecli": "ECLI:NL:RB:2021:3274",
    "date": "2021-09-11",
    "summary": "Advisory opinion on criminal procedure in context of case 3274...",
    "domain": "International",
    "citations": 82
  },
  {
    "id": "1626",
    "ecli": "ECLI:NL:HR:2021:2446",
    "date": "2021-06-02",
    "summary": "Judgment on intellectual property rights in context of case 2446...",
    "domain": "Constitutional",
    "citations": 98
  },
  {
    "id": "1627",
    "ecli": "ECLI:NL:PHR:2024:3503",
    "date": "2024-03-26",
    "summary": "Ruling on environmental regulations compliance in context of case 3503...",
    "domain": "Criminal",
    "citations": 31
  },
  {
    "id": "1628",
    "ecli": "ECLI:EU:C:2022:3125",
    "date": "2022-03-20",
    "summary": "Interpretation of maritime law in context of case 3125...",
    "domain": "Familial",
    "citations": 3
  },
  {
    "id": "1629",
    "ecli": "ECLI:NL:GH:2023:4570",
    "date": "2023-05-11",
    "summary": "Preliminary ruling on data protection in context of case 4570...",
    "domain": "Administrative",
    "citations": 15
  },
  {
    "id": "1630",
    "ecli": "ECLI:NL:RB:2021:2444",
    "date": "2021-07-04",
    "summary": "Ruling on environmental regulations compliance in context of case 2444...",
    "domain": "Criminal",
    "citations": 5
  },
  {
    "id": "1631",
    "ecli": "ECLI:NL:GH:2021:4977",
    "date": "2021-09-06",
    "summary": "Decision regarding contract law interpretation in context of case 4977...",
    "domain": "Civil",
    "citations": 28
  },
  {
    "id": "1632",
    "ecli": "ECLI:ECHR:2022:2716",
    "date": "2022-09-12",
    "summary": "Decision regarding contract law interpretation in context of case 2716...",
    "domain": "Administrative",
    "citations": 43
  },
  {
    "id": "1633",
    "ecli": "ECLI:ECHR:2023:7883",
    "date": "2023-07-02",
    "summary": "Preliminary ruling on data protection in context of case 7883...",
    "domain": "Civil",
    "citations": 74
  },
  {
    "id": "1634",
    "ecli": "ECLI:NL:RB:2022:0459",
    "date": "2022-11-19",
    "summary": "Case concerning labor law disputes in context of case 0459...",
    "domain": "International",
    "citations": 2
  },
  {
    "id": "1635",
    "ecli": "ECLI:NL:GH:2021:1467",
    "date": "2021-01-05",
    "summary": "Judgment regarding consumer protection laws in context of case 1467...",
    "domain": "International",
    "citations": 93
  },
  {
    "id": "1636",
    "ecli": "ECLI:ECHR:2024:7322",
    "date": "2024-05-10",
    "summary": "Decision on human rights violations in context of case 7322...",
    "domain": "Civil",
    "citations": 40
  },
  {
    "id": "1637",
    "ecli": "ECLI:NL:PHR:2024:0403",
    "date": "2024-12-20",
    "summary": "Ruling on antitrust and competition in context of case 0403...",
    "domain": "Familial",
    "citations": 87
  },
  {
    "id": "1638",
    "ecli": "ECLI:EU:C:2023:6891",
    "date": "2023-04-26",
    "summary": "Decision on human rights violations in context of case 6891...",
    "domain": "Criminal",
    "citations": 35
  },
  {
    "id": "1639",
    "ecli": "ECLI:NL:GH:2023:1308",
    "date": "2023-10-27",
    "summary": "Decision regarding contract law interpretation in context of case 1308...",
    "domain": "Civil",
    "citations": 26
  },
  {
    "id": "1640",
    "ecli": "ECLI:NL:GH:2020:0655",
    "date": "2020-04-24",
    "summary": "Decision on human rights violations in context of case 0655...",
    "domain": "International",
    "citations": 86
  },
  {
    "id": "1641",
    "ecli": "ECLI:NL:RB:2024:8817",
    "date": "2024-10-12",
    "summary": "Decision on human rights violations in context of case 8817...",
    "domain": "Administrative",
    "citations": 70
  },
  {
    "id": "1642",
    "ecli": "ECLI:NL:HR:2020:9003",
    "date": "2020-02-19",
    "summary": "Decision regarding contract law interpretation in context of case 9003...",
    "domain": "Criminal",
    "citations": 59
  },
  {
    "id": "1643",
    "ecli": "ECLI:NL:RB:2024:1252",
    "date": "2024-04-06",
    "summary": "Ruling on antitrust and competition in context of case 1252...",
    "domain": "Familial",
    "citations": 57
  },
  {
    "id": "1644",
    "ecli": "ECLI:NL:HR:2023:0007",
    "date": "2023-10-17",
    "summary": "Interpretation of maritime law in context of case 0007...",
    "domain": "Criminal",
    "citations": 10
  },
  {
    "id": "1645",
    "ecli": "ECLI:EU:C:2023:5495",
    "date": "2023-04-20",
    "summary": "Advisory opinion on criminal procedure in context of case 5495...",
    "domain": "Familial",
    "citations": 90
  },
  {
    "id": "1646",
    "ecli": "ECLI:NL:RB:2023:4873",
    "date": "2023-05-03",
    "summary": "Interpretation of maritime law in context of case 4873...",
    "domain": "Civil",
    "citations": 99
  },
  {
    "id": "1647",
    "ecli": "ECLI:NL:GH:2020:6078",
    "date": "2020-01-21",
    "summary": "Ruling on environmental regulations compliance in context of case 6078...",
    "domain": "International",
    "citations": 48
  },
  {
    "id": "1648",
    "ecli": "ECLI:NL:RB:2021:9860",
    "date": "2021-12-07",
    "summary": "Judgment on intellectual property rights in context of case 9860...",
    "domain": "Administrative",
    "citations": 7
  },
  {
    "id": "1649",
    "ecli": "ECLI:ECHR:2023:9665",
    "date": "2023-10-27",
    "summary": "Judgment on intellectual property rights in context of case 9665...",
    "domain": "International",
    "citations": 25
  },
  {
    "id": "1650",
    "ecli": "ECLI:NL:HR:2021:0926",
    "date": "2021-11-02",
    "summary": "Judgment on intellectual property rights in context of case 0926...",
    "domain": "Administrative",
    "citations": 15
  },
  {
    "id": "1651",
    "ecli": "ECLI:ECHR:2024:2521",
    "date": "2024-07-03",
    "summary": "Preliminary ruling on data protection in context of case 2521...",
    "domain": "Constitutional",
    "citations": 65
  },
  {
    "id": "1652",
    "ecli": "ECLI:NL:GH:2023:6814",
    "date": "2023-04-02",
    "summary": "Preliminary ruling on data protection in context of case 6814...",
    "domain": "Civil",
    "citations": 73
  },
  {
    "id": "1653",
    "ecli": "ECLI:NL:RB:2024:7765",
    "date": "2024-04-26",
    "summary": "Interpretation of maritime law in context of case 7765...",
    "domain": "Criminal",
    "citations": 70
  },
  {
    "id": "1654",
    "ecli": "ECLI:NL:HR:2024:2320",
    "date": "2024-04-14",
    "summary": "Decision regarding contract law interpretation in context of case 2320...",
    "domain": "Administrative",
    "citations": 7
  },
  {
    "id": "1655",
    "ecli": "ECLI:NL:RB:2021:8378",
    "date": "2021-03-04",
    "summary": "Case concerning labor law disputes in context of case 8378...",
    "domain": "Constitutional",
    "citations": 58
  },
  {
    "id": "1656",
    "ecli": "ECLI:EU:C:2023:1157",
    "date": "2023-01-28",
    "summary": "Decision regarding contract law interpretation in context of case 1157...",
    "domain": "Constitutional",
    "citations": 72
  },
  {
    "id": "1657",
    "ecli": "ECLI:NL:GH:2023:4768",
    "date": "2023-02-26",
    "summary": "Case concerning labor law disputes in context of case 4768...",
    "domain": "Civil",
    "citations": 47
  },
  {
    "id": "1658",
    "ecli": "ECLI:NL:RB:2024:8435",
    "date": "2024-07-01",
    "summary": "Decision on human rights violations in context of case 8435...",
    "domain": "Criminal",
    "citations": 35
  },
  {
    "id": "1659",
    "ecli": "ECLI:NL:PHR:2024:3574",
    "date": "2024-12-12",
    "summary": "Judgment regarding consumer protection laws in context of case 3574...",
    "domain": "Administrative",
    "citations": 61
  },
  {
    "id": "1660",
    "ecli": "ECLI:NL:RB:2021:8390",
    "date": "2021-03-11",
    "summary": "Ruling on environmental regulations compliance in context of case 8390...",
    "domain": "Constitutional",
    "citations": 45
  },
  {
    "id": "1661",
    "ecli": "ECLI:NL:PHR:2020:5440",
    "date": "2020-02-27",
    "summary": "Judgment on intellectual property rights in context of case 5440...",
    "domain": "International",
    "citations": 93
  },
  {
    "id": "1662",
    "ecli": "ECLI:NL:RB:2022:9369",
    "date": "2022-03-19",
    "summary": "Case concerning labor law disputes in context of case 9369...",
    "domain": "Familial",
    "citations": 89
  },
  {
    "id": "1663",
    "ecli": "ECLI:NL:GH:2022:3832",
    "date": "2022-10-23",
    "summary": "Case concerning labor law disputes in context of case 3832...",
    "domain": "Civil",
    "citations": 42
  },
  {
    "id": "1664",
    "ecli": "ECLI:ECHR:2021:7250",
    "date": "2021-12-14",
    "summary": "Decision on human rights violations in context of case 7250...",
    "domain": "Civil",
    "citations": 6
  },
  {
    "id": "1665",
    "ecli": "ECLI:ECHR:2021:9300",
    "date": "2021-06-13",
    "summary": "Decision on human rights violations in context of case 9300...",
    "domain": "International",
    "citations": 41
  },
  {
    "id": "1666",
    "ecli": "ECLI:NL:GH:2022:6849",
    "date": "2022-04-14",
    "summary": "Ruling on environmental regulations compliance in context of case 6849...",
    "domain": "Civil",
    "citations": 18
  },
  {
    "id": "1667",
    "ecli": "ECLI:NL:PHR:2022:7926",
    "date": "2022-04-19",
    "summary": "Ruling on environmental regulations compliance in context of case 7926...",
    "domain": "Criminal",
    "citations": 92
  },
  {
    "id": "1668",
    "ecli": "ECLI:ECHR:2023:6866",
    "date": "2023-07-14",
    "summary": "Ruling on antitrust and competition in context of case 6866...",
    "domain": "Constitutional",
    "citations": 85
  },
  {
    "id": "1669",
    "ecli": "ECLI:NL:RB:2020:7009",
    "date": "2020-10-09",
    "summary": "Decision regarding contract law interpretation in context of case 7009...",
    "domain": "Administrative",
    "citations": 2
  },
  {
    "id": "1670",
    "ecli": "ECLI:NL:RB:2022:3848",
    "date": "2022-07-02",
    "summary": "Preliminary ruling on data protection in context of case 3848...",
    "domain": "International",
    "citations": 37
  },
  {
    "id": "1671",
    "ecli": "ECLI:NL:RB:2022:1634",
    "date": "2022-03-19",
    "summary": "Ruling on environmental regulations compliance in context of case 1634...",
    "domain": "Constitutional",
    "citations": 36
  },
  {
    "id": "1672",
    "ecli": "ECLI:NL:HR:2022:4558",
    "date": "2022-06-12",
    "summary": "Judgment regarding consumer protection laws in context of case 4558...",
    "domain": "Familial",
    "citations": 51
  },
  {
    "id": "1673",
    "ecli": "ECLI:ECHR:2023:2912",
    "date": "2023-09-19",
    "summary": "Interpretation of maritime law in context of case 2912...",
    "domain": "International",
    "citations": 10
  },
  {
    "id": "1674",
    "ecli": "ECLI:NL:HR:2024:1858",
    "date": "2024-04-19",
    "summary": "Judgment regarding consumer protection laws in context of case 1858...",
    "domain": "Criminal",
    "citations": 20
  },
  {
    "id": "1675",
    "ecli": "ECLI:NL:HR:2021:7924",
    "date": "2021-04-23",
    "summary": "Advisory opinion on criminal procedure in context of case 7924...",
    "domain": "Administrative",
    "citations": 95
  },
  {
    "id": "1676",
    "ecli": "ECLI:ECHR:2024:1091",
    "date": "2024-01-04",
    "summary": "Advisory opinion on criminal procedure in context of case 1091...",
    "domain": "Civil",
    "citations": 34
  },
  {
    "id": "1677",
    "ecli": "ECLI:NL:RB:2024:5790",
    "date": "2024-02-25",
    "summary": "Judgment on intellectual property rights in context of case 5790...",
    "domain": "Familial",
    "citations": 56
  },
  {
    "id": "1678",
    "ecli": "ECLI:EU:C:2022:4674",
    "date": "2022-01-27",
    "summary": "Interpretation of maritime law in context of case 4674...",
    "domain": "International",
    "citations": 23
  },
  {
    "id": "1679",
    "ecli": "ECLI:NL:PHR:2024:2767",
    "date": "2024-09-10",
    "summary": "Judgment regarding consumer protection laws in context of case 2767...",
    "domain": "Familial",
    "citations": 35
  },
  {
    "id": "1680",
    "ecli": "ECLI:NL:HR:2023:4591",
    "date": "2023-02-13",
    "summary": "Preliminary ruling on data protection in context of case 4591...",
    "domain": "Criminal",
    "citations": 46
  },
  {
    "id": "1681",
    "ecli": "ECLI:EU:C:2023:0730",
    "date": "2023-12-25",
    "summary": "Case concerning labor law disputes in context of case 0730...",
    "domain": "Criminal",
    "citations": 39
  },
  {
    "id": "1682",
    "ecli": "ECLI:ECHR:2024:0148",
    "date": "2024-06-18",
    "summary": "Case concerning labor law disputes in context of case 0148...",
    "domain": "Constitutional",
    "citations": 76
  },
  {
    "id": "1683",
    "ecli": "ECLI:NL:RB:2023:0426",
    "date": "2023-09-21",
    "summary": "Judgment regarding consumer protection laws in context of case 0426...",
    "domain": "Civil",
    "citations": 82
  },
  {
    "id": "1684",
    "ecli": "ECLI:NL:GH:2022:6991",
    "date": "2022-03-04",
    "summary": "Case concerning labor law disputes in context of case 6991...",
    "domain": "Familial",
    "citations": 43
  },
  {
    "id": "1685",
    "ecli": "ECLI:NL:GH:2023:4541",
    "date": "2023-01-06",
    "summary": "Ruling on environmental regulations compliance in context of case 4541...",
    "domain": "Administrative",
    "citations": 77
  },
  {
    "id": "1686",
    "ecli": "ECLI:NL:RB:2020:7848",
    "date": "2020-02-22",
    "summary": "Judgment regarding consumer protection laws in context of case 7848...",
    "domain": "Administrative",
    "citations": 27
  },
  {
    "id": "1687",
    "ecli": "ECLI:NL:GH:2023:1998",
    "date": "2023-01-03",
    "summary": "Preliminary ruling on data protection in context of case 1998...",
    "domain": "Constitutional",
    "citations": 81
  },
  {
    "id": "1688",
    "ecli": "ECLI:NL:RB:2022:1024",
    "date": "2022-05-17",
    "summary": "Preliminary ruling on data protection in context of case 1024...",
    "domain": "Constitutional",
    "citations": 73
  },
  {
    "id": "1689",
    "ecli": "ECLI:NL:GH:2020:9592",
    "date": "2020-01-05",
    "summary": "Advisory opinion on criminal procedure in context of case 9592...",
    "domain": "Criminal",
    "citations": 62
  },
  {
    "id": "1690",
    "ecli": "ECLI:ECHR:2022:1790",
    "date": "2022-10-12",
    "summary": "Ruling on environmental regulations compliance in context of case 1790...",
    "domain": "Civil",
    "citations": 77
  },
  {
    "id": "1691",
    "ecli": "ECLI:NL:GH:2020:9017",
    "date": "2020-11-14",
    "summary": "Case concerning labor law disputes in context of case 9017...",
    "domain": "International",
    "citations": 39
  },
  {
    "id": "1692",
    "ecli": "ECLI:NL:PHR:2023:5102",
    "date": "2023-01-26",
    "summary": "Judgment regarding consumer protection laws in context of case 5102...",
    "domain": "Civil",
    "citations": 64
  },
  {
    "id": "1693",
    "ecli": "ECLI:NL:GH:2023:0620",
    "date": "2023-11-04",
    "summary": "Decision regarding contract law interpretation in context of case 0620...",
    "domain": "Criminal",
    "citations": 2
  },
  {
    "id": "1694",
    "ecli": "ECLI:ECHR:2020:8708",
    "date": "2020-12-10",
    "summary": "Preliminary ruling on data protection in context of case 8708...",
    "domain": "Familial",
    "citations": 93
  },
  {
    "id": "1695",
    "ecli": "ECLI:NL:GH:2022:3222",
    "date": "2022-07-28",
    "summary": "Ruling on antitrust and competition in context of case 3222...",
    "domain": "Constitutional",
    "citations": 89
  },
  {
    "id": "1696",
    "ecli": "ECLI:NL:GH:2021:3190",
    "date": "2021-12-22",
    "summary": "Preliminary ruling on data protection in context of case 3190...",
    "domain": "Civil",
    "citations": 89
  },
  {
    "id": "1697",
    "ecli": "ECLI:NL:HR:2022:7540",
    "date": "2022-04-06",
    "summary": "Advisory opinion on criminal procedure in context of case 7540...",
    "domain": "Administrative",
    "citations": 55
  },
  {
    "id": "1698",
    "ecli": "ECLI:NL:GH:2022:1509",
    "date": "2022-02-08",
    "summary": "Advisory opinion on criminal procedure in context of case 1509...",
    "domain": "Familial",
    "citations": 57
  },
  {
    "id": "1699",
    "ecli": "ECLI:NL:PHR:2021:6125",
    "date": "2021-03-23",
    "summary": "Advisory opinion on criminal procedure in context of case 6125...",
    "domain": "Familial",
    "citations": 17
  },
  {
    "id": "1700",
    "ecli": "ECLI:NL:GH:2020:1544",
    "date": "2020-12-24",
    "summary": "Case concerning labor law disputes in context of case 1544...",
    "domain": "Familial",
    "citations": 88
  },
  {
    "id": "1701",
    "ecli": "ECLI:NL:HR:2021:8459",
    "date": "2021-12-07",
    "summary": "Decision regarding contract law interpretation in context of case 8459...",
    "domain": "Criminal",
    "citations": 55
  },
  {
    "id": "1702",
    "ecli": "ECLI:NL:HR:2022:9322",
    "date": "2022-02-06",
    "summary": "Decision regarding contract law interpretation in context of case 9322...",
    "domain": "Administrative",
    "citations": 97
  },
  {
    "id": "1703",
    "ecli": "ECLI:NL:GH:2022:1880",
    "date": "2022-01-27",
    "summary": "Preliminary ruling on data protection in context of case 1880...",
    "domain": "Constitutional",
    "citations": 40
  },
  {
    "id": "1704",
    "ecli": "ECLI:NL:HR:2022:1360",
    "date": "2022-03-05",
    "summary": "Case concerning labor law disputes in context of case 1360...",
    "domain": "Civil",
    "citations": 99
  },
  {
    "id": "1705",
    "ecli": "ECLI:NL:RB:2023:8590",
    "date": "2023-04-02",
    "summary": "Judgment on intellectual property rights in context of case 8590...",
    "domain": "Administrative",
    "citations": 35
  },
  {
    "id": "1706",
    "ecli": "ECLI:EU:C:2024:5569",
    "date": "2024-05-15",
    "summary": "Interpretation of maritime law in context of case 5569...",
    "domain": "Constitutional",
    "citations": 29
  },
  {
    "id": "1707",
    "ecli": "ECLI:EU:C:2023:6520",
    "date": "2023-08-28",
    "summary": "Ruling on environmental regulations compliance in context of case 6520...",
    "domain": "Constitutional",
    "citations": 98
  },
  {
    "id": "1708",
    "ecli": "ECLI:NL:HR:2021:3871",
    "date": "2021-08-12",
    "summary": "Case concerning labor law disputes in context of case 3871...",
    "domain": "Civil",
    "citations": 36
  },
  {
    "id": "1709",
    "ecli": "ECLI:NL:GH:2020:8985",
    "date": "2020-11-25",
    "summary": "Advisory opinion on criminal procedure in context of case 8985...",
    "domain": "Criminal",
    "citations": 88
  },
  {
    "id": "1710",
    "ecli": "ECLI:EU:C:2021:2377",
    "date": "2021-06-02",
    "summary": "Ruling on antitrust and competition in context of case 2377...",
    "domain": "Administrative",
    "citations": 98
  },
  {
    "id": "1711",
    "ecli": "ECLI:NL:RB:2022:3541",
    "date": "2022-06-12",
    "summary": "Preliminary ruling on data protection in context of case 3541...",
    "domain": "Constitutional",
    "citations": 40
  },
  {
    "id": "1712",
    "ecli": "ECLI:EU:C:2022:3076",
    "date": "2022-12-20",
    "summary": "Case concerning labor law disputes in context of case 3076...",
    "domain": "Administrative",
    "citations": 21
  },
  {
    "id": "1713",
    "ecli": "ECLI:EU:C:2021:3584",
    "date": "2021-09-03",
    "summary": "Decision regarding contract law interpretation in context of case 3584...",
    "domain": "Criminal",
    "citations": 76
  },
  {
    "id": "1714",
    "ecli": "ECLI:NL:PHR:2021:5720",
    "date": "2021-02-08",
    "summary": "Interpretation of maritime law in context of case 5720...",
    "domain": "International",
    "citations": 21
  },
  {
    "id": "1715",
    "ecli": "ECLI:NL:HR:2021:6459",
    "date": "2021-12-10",
    "summary": "Ruling on antitrust and competition in context of case 6459...",
    "domain": "International",
    "citations": 78
  },
  {
    "id": "1716",
    "ecli": "ECLI:ECHR:2021:8643",
    "date": "2021-07-27",
    "summary": "Judgment regarding consumer protection laws in context of case 8643...",
    "domain": "Administrative",
    "citations": 92
  },
  {
    "id": "1717",
    "ecli": "ECLI:NL:HR:2023:8972",
    "date": "2023-08-17",
    "summary": "Judgment regarding consumer protection laws in context of case 8972...",
    "domain": "Familial",
    "citations": 50
  },
  {
    "id": "1718",
    "ecli": "ECLI:NL:HR:2022:3143",
    "date": "2022-11-05",
    "summary": "Judgment on intellectual property rights in context of case 3143...",
    "domain": "International",
    "citations": 7
  },
  {
    "id": "1719",
    "ecli": "ECLI:NL:PHR:2022:5006",
    "date": "2022-09-12",
    "summary": "Ruling on antitrust and competition in context of case 5006...",
    "domain": "Civil",
    "citations": 71
  },
  {
    "id": "1720",
    "ecli": "ECLI:EU:C:2021:6278",
    "date": "2021-03-25",
    "summary": "Ruling on antitrust and competition in context of case 6278...",
    "domain": "Familial",
    "citations": 18
  },
  {
    "id": "1721",
    "ecli": "ECLI:EU:C:2024:9397",
    "date": "2024-06-07",
    "summary": "Judgment regarding consumer protection laws in context of case 9397...",
    "domain": "Criminal",
    "citations": 14
  },
  {
    "id": "1722",
    "ecli": "ECLI:ECHR:2023:3173",
    "date": "2023-08-06",
    "summary": "Decision on human rights violations in context of case 3173...",
    "domain": "Constitutional",
    "citations": 44
  },
  {
    "id": "1723",
    "ecli": "ECLI:EU:C:2020:0860",
    "date": "2020-03-19",
    "summary": "Ruling on environmental regulations compliance in context of case 0860...",
    "domain": "International",
    "citations": 7
  },
  {
    "id": "1724",
    "ecli": "ECLI:NL:RB:2021:5957",
    "date": "2021-02-05",
    "summary": "Advisory opinion on criminal procedure in context of case 5957...",
    "domain": "Civil",
    "citations": 44
  },
  {
    "id": "1725",
    "ecli": "ECLI:NL:HR:2020:3054",
    "date": "2020-03-20",
    "summary": "Interpretation of maritime law in context of case 3054...",
    "domain": "Civil",
    "citations": 33
  },
  {
    "id": "1726",
    "ecli": "ECLI:ECHR:2021:4436",
    "date": "2021-03-09",
    "summary": "Preliminary ruling on data protection in context of case 4436...",
    "domain": "Administrative",
    "citations": 51
  },
  {
    "id": "1727",
    "ecli": "ECLI:EU:C:2024:5940",
    "date": "2024-12-18",
    "summary": "Interpretation of maritime law in context of case 5940...",
    "domain": "Civil",
    "citations": 50
  },
  {
    "id": "1728",
    "ecli": "ECLI:NL:PHR:2022:6291",
    "date": "2022-12-21",
    "summary": "Ruling on antitrust and competition in context of case 6291...",
    "domain": "Criminal",
    "citations": 50
  },
  {
    "id": "1729",
    "ecli": "ECLI:NL:RB:2021:1717",
    "date": "2021-10-14",
    "summary": "Ruling on environmental regulations compliance in context of case 1717...",
    "domain": "Civil",
    "citations": 97
  },
  {
    "id": "1730",
    "ecli": "ECLI:EU:C:2021:1258",
    "date": "2021-04-14",
    "summary": "Decision on human rights violations in context of case 1258...",
    "domain": "Administrative",
    "citations": 23
  },
  {
    "id": "1731",
    "ecli": "ECLI:NL:HR:2024:0017",
    "date": "2024-11-14",
    "summary": "Ruling on environmental regulations compliance in context of case 0017...",
    "domain": "International",
    "citations": 8
  },
  {
    "id": "1732",
    "ecli": "ECLI:NL:GH:2020:3050",
    "date": "2020-12-28",
    "summary": "Decision regarding contract law interpretation in context of case 3050...",
    "domain": "Familial",
    "citations": 48
  },
  {
    "id": "1733",
    "ecli": "ECLI:NL:HR:2024:9323",
    "date": "2024-09-24",
    "summary": "Judgment on intellectual property rights in context of case 9323...",
    "domain": "Criminal",
    "citations": 19
  },
  {
    "id": "1734",
    "ecli": "ECLI:NL:HR:2024:8520",
    "date": "2024-07-25",
    "summary": "Ruling on environmental regulations compliance in context of case 8520...",
    "domain": "Familial",
    "citations": 97
  },
  {
    "id": "1735",
    "ecli": "ECLI:NL:GH:2024:4502",
    "date": "2024-05-21",
    "summary": "Advisory opinion on criminal procedure in context of case 4502...",
    "domain": "Criminal",
    "citations": 93
  },
  {
    "id": "1736",
    "ecli": "ECLI:NL:HR:2022:6498",
    "date": "2022-05-27",
    "summary": "Advisory opinion on criminal procedure in context of case 6498...",
    "domain": "Familial",
    "citations": 35
  },
  {
    "id": "1737",
    "ecli": "ECLI:ECHR:2020:0145",
    "date": "2020-02-02",
    "summary": "Ruling on antitrust and competition in context of case 0145...",
    "domain": "Familial",
    "citations": 6
  },
  {
    "id": "1738",
    "ecli": "ECLI:EU:C:2023:2475",
    "date": "2023-03-03",
    "summary": "Judgment on intellectual property rights in context of case 2475...",
    "domain": "Constitutional",
    "citations": 98
  },
  {
    "id": "1739",
    "ecli": "ECLI:NL:HR:2021:7783",
    "date": "2021-09-05",
    "summary": "Ruling on environmental regulations compliance in context of case 7783...",
    "domain": "International",
    "citations": 84
  },
  {
    "id": "1740",
    "ecli": "ECLI:NL:HR:2020:1314",
    "date": "2020-02-07",
    "summary": "Interpretation of maritime law in context of case 1314...",
    "domain": "Civil",
    "citations": 27
  },
  {
    "id": "1741",
    "ecli": "ECLI:NL:RB:2022:4524",
    "date": "2022-07-27",
    "summary": "Judgment regarding consumer protection laws in context of case 4524...",
    "domain": "Civil",
    "citations": 86
  },
  {
    "id": "1742",
    "ecli": "ECLI:NL:RB:2024:0391",
    "date": "2024-04-19",
    "summary": "Ruling on environmental regulations compliance in context of case 0391...",
    "domain": "Familial",
    "citations": 35
  },
  {
    "id": "1743",
    "ecli": "ECLI:EU:C:2022:8640",
    "date": "2022-06-16",
    "summary": "Decision on human rights violations in context of case 8640...",
    "domain": "Familial",
    "citations": 83
  },
  {
    "id": "1744",
    "ecli": "ECLI:NL:GH:2021:9313",
    "date": "2021-11-28",
    "summary": "Interpretation of maritime law in context of case 9313...",
    "domain": "Familial",
    "citations": 69
  },
  {
    "id": "1745",
    "ecli": "ECLI:NL:HR:2023:2593",
    "date": "2023-03-15",
    "summary": "Ruling on environmental regulations compliance in context of case 2593...",
    "domain": "Civil",
    "citations": 41
  },
  {
    "id": "1746",
    "ecli": "ECLI:NL:PHR:2023:5979",
    "date": "2023-11-01",
    "summary": "Judgment on intellectual property rights in context of case 5979...",
    "domain": "Administrative",
    "citations": 19
  },
  {
    "id": "1747",
    "ecli": "ECLI:NL:PHR:2020:3754",
    "date": "2020-02-05",
    "summary": "Ruling on environmental regulations compliance in context of case 3754...",
    "domain": "Constitutional",
    "citations": 87
  },
  {
    "id": "1748",
    "ecli": "ECLI:NL:RB:2022:7957",
    "date": "2022-08-20",
    "summary": "Advisory opinion on criminal procedure in context of case 7957...",
    "domain": "Civil",
    "citations": 35
  },
  {
    "id": "1749",
    "ecli": "ECLI:NL:PHR:2022:2937",
    "date": "2022-08-23",
    "summary": "Judgment regarding consumer protection laws in context of case 2937...",
    "domain": "International",
    "citations": 60
  },
  {
    "id": "1750",
    "ecli": "ECLI:ECHR:2021:7120",
    "date": "2021-08-20",
    "summary": "Decision on human rights violations in context of case 7120...",
    "domain": "Constitutional",
    "citations": 50
  },
  {
    "id": "1751",
    "ecli": "ECLI:EU:C:2024:3237",
    "date": "2024-02-24",
    "summary": "Decision regarding contract law interpretation in context of case 3237...",
    "domain": "Administrative",
    "citations": 65
  },
  {
    "id": "1752",
    "ecli": "ECLI:NL:RB:2022:3142",
    "date": "2022-03-20",
    "summary": "Interpretation of maritime law in context of case 3142...",
    "domain": "Constitutional",
    "citations": 17
  },
  {
    "id": "1753",
    "ecli": "ECLI:NL:RB:2024:9391",
    "date": "2024-05-07",
    "summary": "Ruling on environmental regulations compliance in context of case 9391...",
    "domain": "Criminal",
    "citations": 12
  },
  {
    "id": "1754",
    "ecli": "ECLI:ECHR:2022:7876",
    "date": "2022-11-24",
    "summary": "Judgment regarding consumer protection laws in context of case 7876...",
    "domain": "Constitutional",
    "citations": 80
  },
  {
    "id": "1755",
    "ecli": "ECLI:NL:RB:2022:8548",
    "date": "2022-07-21",
    "summary": "Judgment on intellectual property rights in context of case 8548...",
    "domain": "Constitutional",
    "citations": 29
  },
  {
    "id": "1756",
    "ecli": "ECLI:NL:PHR:2020:8729",
    "date": "2020-03-27",
    "summary": "Preliminary ruling on data protection in context of case 8729...",
    "domain": "Familial",
    "citations": 98
  },
  {
    "id": "1757",
    "ecli": "ECLI:ECHR:2023:8957",
    "date": "2023-05-23",
    "summary": "Judgment regarding consumer protection laws in context of case 8957...",
    "domain": "Civil",
    "citations": 26
  },
  {
    "id": "1758",
    "ecli": "ECLI:ECHR:2024:7005",
    "date": "2024-01-06",
    "summary": "Decision regarding contract law interpretation in context of case 7005...",
    "domain": "Constitutional",
    "citations": 98
  },
  {
    "id": "1759",
    "ecli": "ECLI:NL:PHR:2020:5603",
    "date": "2020-04-09",
    "summary": "Case concerning labor law disputes in context of case 5603...",
    "domain": "Familial",
    "citations": 45
  },
  {
    "id": "1760",
    "ecli": "ECLI:NL:PHR:2023:5080",
    "date": "2023-06-12",
    "summary": "Judgment regarding consumer protection laws in context of case 5080...",
    "domain": "Constitutional",
    "citations": 25
  },
  {
    "id": "1761",
    "ecli": "ECLI:EU:C:2024:2857",
    "date": "2024-11-11",
    "summary": "Ruling on antitrust and competition in context of case 2857...",
    "domain": "Constitutional",
    "citations": 47
  },
  {
    "id": "1762",
    "ecli": "ECLI:NL:GH:2020:0042",
    "date": "2020-11-01",
    "summary": "Case concerning labor law disputes in context of case 0042...",
    "domain": "Criminal",
    "citations": 88
  },
  {
    "id": "1763",
    "ecli": "ECLI:EU:C:2021:6629",
    "date": "2021-05-15",
    "summary": "Advisory opinion on criminal procedure in context of case 6629...",
    "domain": "Constitutional",
    "citations": 53
  },
  {
    "id": "1764",
    "ecli": "ECLI:EU:C:2021:2141",
    "date": "2021-06-19",
    "summary": "Judgment on intellectual property rights in context of case 2141...",
    "domain": "Constitutional",
    "citations": 98
  },
  {
    "id": "1765",
    "ecli": "ECLI:EU:C:2020:9866",
    "date": "2020-07-25",
    "summary": "Decision on human rights violations in context of case 9866...",
    "domain": "International",
    "citations": 36
  },
  {
    "id": "1766",
    "ecli": "ECLI:NL:GH:2023:7033",
    "date": "2023-11-11",
    "summary": "Case concerning labor law disputes in context of case 7033...",
    "domain": "International",
    "citations": 49
  },
  {
    "id": "1767",
    "ecli": "ECLI:NL:PHR:2023:4956",
    "date": "2023-09-22",
    "summary": "Preliminary ruling on data protection in context of case 4956...",
    "domain": "International",
    "citations": 75
  },
  {
    "id": "1768",
    "ecli": "ECLI:EU:C:2021:2704",
    "date": "2021-11-25",
    "summary": "Judgment regarding consumer protection laws in context of case 2704...",
    "domain": "Criminal",
    "citations": 98
  },
  {
    "id": "1769",
    "ecli": "ECLI:ECHR:2021:1534",
    "date": "2021-06-20",
    "summary": "Interpretation of maritime law in context of case 1534...",
    "domain": "International",
    "citations": 92
  },
  {
    "id": "1770",
    "ecli": "ECLI:NL:RB:2023:8186",
    "date": "2023-05-17",
    "summary": "Preliminary ruling on data protection in context of case 8186...",
    "domain": "Civil",
    "citations": 21
  },
  {
    "id": "1771",
    "ecli": "ECLI:NL:HR:2024:7144",
    "date": "2024-11-11",
    "summary": "Ruling on environmental regulations compliance in context of case 7144...",
    "domain": "Administrative",
    "citations": 81
  },
  {
    "id": "1772",
    "ecli": "ECLI:NL:GH:2020:8936",
    "date": "2020-12-23",
    "summary": "Judgment regarding consumer protection laws in context of case 8936...",
    "domain": "Familial",
    "citations": 6
  },
  {
    "id": "1773",
    "ecli": "ECLI:ECHR:2021:6581",
    "date": "2021-04-06",
    "summary": "Ruling on antitrust and competition in context of case 6581...",
    "domain": "Criminal",
    "citations": 37
  },
  {
    "id": "1774",
    "ecli": "ECLI:NL:GH:2022:0179",
    "date": "2022-03-28",
    "summary": "Case concerning labor law disputes in context of case 0179...",
    "domain": "Constitutional",
    "citations": 32
  },
  {
    "id": "1775",
    "ecli": "ECLI:NL:PHR:2020:5670",
    "date": "2020-11-24",
    "summary": "Case concerning labor law disputes in context of case 5670...",
    "domain": "Civil",
    "citations": 0
  },
  {
    "id": "1776",
    "ecli": "ECLI:ECHR:2021:4250",
    "date": "2021-12-08",
    "summary": "Ruling on antitrust and competition in context of case 4250...",
    "domain": "Administrative",
    "citations": 39
  },
  {
    "id": "1777",
    "ecli": "ECLI:EU:C:2023:4904",
    "date": "2023-09-25",
    "summary": "Ruling on antitrust and competition in context of case 4904...",
    "domain": "Constitutional",
    "citations": 49
  },
  {
    "id": "1778",
    "ecli": "ECLI:NL:GH:2023:1156",
    "date": "2023-06-25",
    "summary": "Case concerning labor law disputes in context of case 1156...",
    "domain": "Civil",
    "citations": 92
  },
  {
    "id": "1779",
    "ecli": "ECLI:NL:PHR:2023:7236",
    "date": "2023-12-17",
    "summary": "Case concerning labor law disputes in context of case 7236...",
    "domain": "Familial",
    "citations": 65
  },
  {
    "id": "1780",
    "ecli": "ECLI:NL:HR:2023:4210",
    "date": "2023-02-08",
    "summary": "Preliminary ruling on data protection in context of case 4210...",
    "domain": "Civil",
    "citations": 69
  },
  {
    "id": "1781",
    "ecli": "ECLI:NL:HR:2022:2007",
    "date": "2022-09-18",
    "summary": "Ruling on environmental regulations compliance in context of case 2007...",
    "domain": "Administrative",
    "citations": 86
  },
  {
    "id": "1782",
    "ecli": "ECLI:NL:HR:2024:0333",
    "date": "2024-08-25",
    "summary": "Judgment on intellectual property rights in context of case 0333...",
    "domain": "Constitutional",
    "citations": 94
  },
  {
    "id": "1783",
    "ecli": "ECLI:ECHR:2023:9033",
    "date": "2023-02-20",
    "summary": "Advisory opinion on criminal procedure in context of case 9033...",
    "domain": "Criminal",
    "citations": 87
  },
  {
    "id": "1784",
    "ecli": "ECLI:NL:RB:2020:8956",
    "date": "2020-10-01",
    "summary": "Advisory opinion on criminal procedure in context of case 8956...",
    "domain": "Administrative",
    "citations": 26
  },
  {
    "id": "1785",
    "ecli": "ECLI:NL:RB:2020:4940",
    "date": "2020-07-22",
    "summary": "Ruling on antitrust and competition in context of case 4940...",
    "domain": "Familial",
    "citations": 64
  },
  {
    "id": "1786",
    "ecli": "ECLI:NL:PHR:2020:6977",
    "date": "2020-08-01",
    "summary": "Judgment on intellectual property rights in context of case 6977...",
    "domain": "International",
    "citations": 5
  },
  {
    "id": "1787",
    "ecli": "ECLI:ECHR:2022:4388",
    "date": "2022-10-11",
    "summary": "Ruling on antitrust and competition in context of case 4388...",
    "domain": "International",
    "citations": 59
  },
  {
    "id": "1788",
    "ecli": "ECLI:ECHR:2024:9509",
    "date": "2024-09-09",
    "summary": "Interpretation of maritime law in context of case 9509...",
    "domain": "Constitutional",
    "citations": 58
  },
  {
    "id": "1789",
    "ecli": "ECLI:EU:C:2024:0275",
    "date": "2024-11-03",
    "summary": "Judgment on intellectual property rights in context of case 0275...",
    "domain": "International",
    "citations": 11
  },
  {
    "id": "1790",
    "ecli": "ECLI:NL:RB:2021:7171",
    "date": "2021-12-15",
    "summary": "Ruling on environmental regulations compliance in context of case 7171...",
    "domain": "Administrative",
    "citations": 84
  },
  {
    "id": "1791",
    "ecli": "ECLI:NL:HR:2023:9042",
    "date": "2023-07-27",
    "summary": "Judgment regarding consumer protection laws in context of case 9042...",
    "domain": "International",
    "citations": 98
  },
  {
    "id": "1792",
    "ecli": "ECLI:NL:HR:2024:1042",
    "date": "2024-04-01",
    "summary": "Judgment regarding consumer protection laws in context of case 1042...",
    "domain": "Constitutional",
    "citations": 48
  },
  {
    "id": "1793",
    "ecli": "ECLI:NL:HR:2024:5786",
    "date": "2024-05-21",
    "summary": "Ruling on environmental regulations compliance in context of case 5786...",
    "domain": "Familial",
    "citations": 93
  },
  {
    "id": "1794",
    "ecli": "ECLI:NL:GH:2020:4990",
    "date": "2020-03-27",
    "summary": "Preliminary ruling on data protection in context of case 4990...",
    "domain": "Criminal",
    "citations": 78
  },
  {
    "id": "1795",
    "ecli": "ECLI:EU:C:2023:3777",
    "date": "2023-09-14",
    "summary": "Judgment regarding consumer protection laws in context of case 3777...",
    "domain": "International",
    "citations": 59
  },
  {
    "id": "1796",
    "ecli": "ECLI:NL:RB:2023:8659",
    "date": "2023-03-17",
    "summary": "Decision on human rights violations in context of case 8659...",
    "domain": "Criminal",
    "citations": 53
  },
  {
    "id": "1797",
    "ecli": "ECLI:NL:PHR:2021:2845",
    "date": "2021-07-20",
    "summary": "Ruling on environmental regulations compliance in context of case 2845...",
    "domain": "Familial",
    "citations": 96
  },
  {
    "id": "1798",
    "ecli": "ECLI:NL:RB:2023:3843",
    "date": "2023-09-09",
    "summary": "Interpretation of maritime law in context of case 3843...",
    "domain": "Familial",
    "citations": 25
  },
  {
    "id": "1799",
    "ecli": "ECLI:EU:C:2024:6344",
    "date": "2024-02-05",
    "summary": "Preliminary ruling on data protection in context of case 6344...",
    "domain": "Constitutional",
    "citations": 46
  },
  {
    "id": "1800",
    "ecli": "ECLI:ECHR:2024:6412",
    "date": "2024-07-10",
    "summary": "Case concerning labor law disputes in context of case 6412...",
    "domain": "Civil",
    "citations": 37
  },
  {
    "id": "1801",
    "ecli": "ECLI:NL:PHR:2020:7338",
    "date": "2020-09-09",
    "summary": "Decision on human rights violations in context of case 7338...",
    "domain": "Constitutional",
    "citations": 65
  },
  {
    "id": "1802",
    "ecli": "ECLI:NL:RB:2020:5020",
    "date": "2020-10-18",
    "summary": "Interpretation of maritime law in context of case 5020...",
    "domain": "Constitutional",
    "citations": 91
  },
  {
    "id": "1803",
    "ecli": "ECLI:ECHR:2023:7308",
    "date": "2023-06-12",
    "summary": "Advisory opinion on criminal procedure in context of case 7308...",
    "domain": "Criminal",
    "citations": 5
  },
  {
    "id": "1804",
    "ecli": "ECLI:NL:PHR:2021:6533",
    "date": "2021-11-15",
    "summary": "Decision on human rights violations in context of case 6533...",
    "domain": "Constitutional",
    "citations": 58
  },
  {
    "id": "1805",
    "ecli": "ECLI:EU:C:2024:5925",
    "date": "2024-10-05",
    "summary": "Case concerning labor law disputes in context of case 5925...",
    "domain": "Familial",
    "citations": 66
  },
  {
    "id": "1806",
    "ecli": "ECLI:EU:C:2022:6990",
    "date": "2022-03-11",
    "summary": "Advisory opinion on criminal procedure in context of case 6990...",
    "domain": "International",
    "citations": 89
  },
  {
    "id": "1807",
    "ecli": "ECLI:NL:RB:2022:3248",
    "date": "2022-11-17",
    "summary": "Decision regarding contract law interpretation in context of case 3248...",
    "domain": "Civil",
    "citations": 57
  },
  {
    "id": "1808",
    "ecli": "ECLI:EU:C:2020:7813",
    "date": "2020-06-21",
    "summary": "Preliminary ruling on data protection in context of case 7813...",
    "domain": "International",
    "citations": 80
  },
  {
    "id": "1809",
    "ecli": "ECLI:NL:HR:2024:1633",
    "date": "2024-04-01",
    "summary": "Case concerning labor law disputes in context of case 1633...",
    "domain": "Administrative",
    "citations": 34
  },
  {
    "id": "1810",
    "ecli": "ECLI:NL:HR:2022:1380",
    "date": "2022-02-17",
    "summary": "Interpretation of maritime law in context of case 1380...",
    "domain": "Constitutional",
    "citations": 66
  },
  {
    "id": "1811",
    "ecli": "ECLI:NL:PHR:2023:9762",
    "date": "2023-11-02",
    "summary": "Advisory opinion on criminal procedure in context of case 9762...",
    "domain": "International",
    "citations": 8
  },
  {
    "id": "1812",
    "ecli": "ECLI:ECHR:2022:4658",
    "date": "2022-02-19",
    "summary": "Decision regarding contract law interpretation in context of case 4658...",
    "domain": "International",
    "citations": 18
  },
  {
    "id": "1813",
    "ecli": "ECLI:EU:C:2024:2490",
    "date": "2024-10-28",
    "summary": "Judgment regarding consumer protection laws in context of case 2490...",
    "domain": "Civil",
    "citations": 29
  },
  {
    "id": "1814",
    "ecli": "ECLI:ECHR:2021:9349",
    "date": "2021-02-21",
    "summary": "Decision regarding contract law interpretation in context of case 9349...",
    "domain": "Constitutional",
    "citations": 24
  },
  {
    "id": "1815",
    "ecli": "ECLI:NL:PHR:2022:6649",
    "date": "2022-08-24",
    "summary": "Interpretation of maritime law in context of case 6649...",
    "domain": "International",
    "citations": 91
  },
  {
    "id": "1816",
    "ecli": "ECLI:NL:PHR:2023:4299",
    "date": "2023-01-04",
    "summary": "Preliminary ruling on data protection in context of case 4299...",
    "domain": "Constitutional",
    "citations": 73
  },
  {
    "id": "1817",
    "ecli": "ECLI:ECHR:2023:5805",
    "date": "2023-01-06",
    "summary": "Advisory opinion on criminal procedure in context of case 5805...",
    "domain": "Administrative",
    "citations": 68
  },
  {
    "id": "1818",
    "ecli": "ECLI:ECHR:2024:3879",
    "date": "2024-04-18",
    "summary": "Ruling on antitrust and competition in context of case 3879...",
    "domain": "Familial",
    "citations": 38
  },
  {
    "id": "1819",
    "ecli": "ECLI:ECHR:2024:7302",
    "date": "2024-02-28",
    "summary": "Advisory opinion on criminal procedure in context of case 7302...",
    "domain": "Civil",
    "citations": 7
  },
  {
    "id": "1820",
    "ecli": "ECLI:ECHR:2022:8536",
    "date": "2022-07-25",
    "summary": "Interpretation of maritime law in context of case 8536...",
    "domain": "International",
    "citations": 60
  },
  {
    "id": "1821",
    "ecli": "ECLI:ECHR:2024:2488",
    "date": "2024-01-16",
    "summary": "Advisory opinion on criminal procedure in context of case 2488...",
    "domain": "International",
    "citations": 63
  },
  {
    "id": "1822",
    "ecli": "ECLI:EU:C:2023:7745",
    "date": "2023-02-01",
    "summary": "Advisory opinion on criminal procedure in context of case 7745...",
    "domain": "Criminal",
    "citations": 84
  },
  {
    "id": "1823",
    "ecli": "ECLI:NL:GH:2021:8638",
    "date": "2021-02-08",
    "summary": "Preliminary ruling on data protection in context of case 8638...",
    "domain": "Constitutional",
    "citations": 79
  },
  {
    "id": "1824",
    "ecli": "ECLI:NL:RB:2023:0622",
    "date": "2023-01-27",
    "summary": "Decision regarding contract law interpretation in context of case 0622...",
    "domain": "Criminal",
    "citations": 85
  },
  {
    "id": "1825",
    "ecli": "ECLI:NL:GH:2023:3124",
    "date": "2023-06-18",
    "summary": "Advisory opinion on criminal procedure in context of case 3124...",
    "domain": "Administrative",
    "citations": 15
  },
  {
    "id": "1826",
    "ecli": "ECLI:NL:HR:2023:6544",
    "date": "2023-09-02",
    "summary": "Advisory opinion on criminal procedure in context of case 6544...",
    "domain": "Civil",
    "citations": 43
  },
  {
    "id": "1827",
    "ecli": "ECLI:NL:RB:2022:1059",
    "date": "2022-12-20",
    "summary": "Advisory opinion on criminal procedure in context of case 1059...",
    "domain": "International",
    "citations": 22
  },
  {
    "id": "1828",
    "ecli": "ECLI:EU:C:2022:9584",
    "date": "2022-03-13",
    "summary": "Advisory opinion on criminal procedure in context of case 9584...",
    "domain": "Familial",
    "citations": 95
  },
  {
    "id": "1829",
    "ecli": "ECLI:NL:RB:2023:7297",
    "date": "2023-07-02",
    "summary": "Ruling on antitrust and competition in context of case 7297...",
    "domain": "Criminal",
    "citations": 19
  },
  {
    "id": "1830",
    "ecli": "ECLI:NL:HR:2020:9642",
    "date": "2020-04-23",
    "summary": "Decision regarding contract law interpretation in context of case 9642...",
    "domain": "Familial",
    "citations": 24
  },
  {
    "id": "1831",
    "ecli": "ECLI:NL:PHR:2021:2185",
    "date": "2021-07-24",
    "summary": "Judgment on intellectual property rights in context of case 2185...",
    "domain": "Criminal",
    "citations": 28
  },
  {
    "id": "1832",
    "ecli": "ECLI:NL:RB:2022:6205",
    "date": "2022-05-11",
    "summary": "Judgment regarding consumer protection laws in context of case 6205...",
    "domain": "Civil",
    "citations": 24
  },
  {
    "id": "1833",
    "ecli": "ECLI:EU:C:2022:6816",
    "date": "2022-10-25",
    "summary": "Case concerning labor law disputes in context of case 6816...",
    "domain": "Civil",
    "citations": 72
  },
  {
    "id": "1834",
    "ecli": "ECLI:NL:HR:2023:5823",
    "date": "2023-08-02",
    "summary": "Decision regarding contract law interpretation in context of case 5823...",
    "domain": "Civil",
    "citations": 11
  },
  {
    "id": "1835",
    "ecli": "ECLI:NL:RB:2020:9581",
    "date": "2020-09-16",
    "summary": "Judgment on intellectual property rights in context of case 9581...",
    "domain": "Administrative",
    "citations": 86
  },
  {
    "id": "1836",
    "ecli": "ECLI:NL:HR:2023:4247",
    "date": "2023-01-13",
    "summary": "Advisory opinion on criminal procedure in context of case 4247...",
    "domain": "Familial",
    "citations": 59
  },
  {
    "id": "1837",
    "ecli": "ECLI:ECHR:2021:7030",
    "date": "2021-07-23",
    "summary": "Judgment regarding consumer protection laws in context of case 7030...",
    "domain": "Constitutional",
    "citations": 66
  },
  {
    "id": "1838",
    "ecli": "ECLI:EU:C:2024:0837",
    "date": "2024-01-10",
    "summary": "Ruling on antitrust and competition in context of case 0837...",
    "domain": "International",
    "citations": 1
  },
  {
    "id": "1839",
    "ecli": "ECLI:NL:PHR:2020:8432",
    "date": "2020-05-20",
    "summary": "Decision on human rights violations in context of case 8432...",
    "domain": "International",
    "citations": 51
  },
  {
    "id": "1840",
    "ecli": "ECLI:NL:RB:2021:2964",
    "date": "2021-10-09",
    "summary": "Preliminary ruling on data protection in context of case 2964...",
    "domain": "Constitutional",
    "citations": 65
  },
  {
    "id": "1841",
    "ecli": "ECLI:NL:HR:2022:8374",
    "date": "2022-04-14",
    "summary": "Ruling on antitrust and competition in context of case 8374...",
    "domain": "Familial",
    "citations": 90
  },
  {
    "id": "1842",
    "ecli": "ECLI:NL:HR:2023:1728",
    "date": "2023-02-19",
    "summary": "Preliminary ruling on data protection in context of case 1728...",
    "domain": "Familial",
    "citations": 51
  },
  {
    "id": "1843",
    "ecli": "ECLI:EU:C:2023:1403",
    "date": "2023-11-10",
    "summary": "Interpretation of maritime law in context of case 1403...",
    "domain": "Constitutional",
    "citations": 21
  },
  {
    "id": "1844",
    "ecli": "ECLI:NL:GH:2021:6035",
    "date": "2021-03-15",
    "summary": "Preliminary ruling on data protection in context of case 6035...",
    "domain": "Administrative",
    "citations": 78
  },
  {
    "id": "1845",
    "ecli": "ECLI:ECHR:2021:4550",
    "date": "2021-02-12",
    "summary": "Decision regarding contract law interpretation in context of case 4550...",
    "domain": "Familial",
    "citations": 18
  },
  {
    "id": "1846",
    "ecli": "ECLI:NL:HR:2022:5440",
    "date": "2022-12-16",
    "summary": "Advisory opinion on criminal procedure in context of case 5440...",
    "domain": "Constitutional",
    "citations": 48
  },
  {
    "id": "1847",
    "ecli": "ECLI:NL:HR:2022:7947",
    "date": "2022-09-06",
    "summary": "Judgment on intellectual property rights in context of case 7947...",
    "domain": "Criminal",
    "citations": 70
  },
  {
    "id": "1848",
    "ecli": "ECLI:NL:RB:2022:3434",
    "date": "2022-01-09",
    "summary": "Decision regarding contract law interpretation in context of case 3434...",
    "domain": "Administrative",
    "citations": 28
  },
  {
    "id": "1849",
    "ecli": "ECLI:EU:C:2024:8483",
    "date": "2024-04-05",
    "summary": "Decision on human rights violations in context of case 8483...",
    "domain": "Constitutional",
    "citations": 33
  },
  {
    "id": "1850",
    "ecli": "ECLI:NL:PHR:2023:2822",
    "date": "2023-06-14",
    "summary": "Ruling on environmental regulations compliance in context of case 2822...",
    "domain": "Administrative",
    "citations": 94
  },
  {
    "id": "1851",
    "ecli": "ECLI:EU:C:2024:2168",
    "date": "2024-10-14",
    "summary": "Case concerning labor law disputes in context of case 2168...",
    "domain": "International",
    "citations": 84
  },
  {
    "id": "1852",
    "ecli": "ECLI:ECHR:2020:6096",
    "date": "2020-11-27",
    "summary": "Preliminary ruling on data protection in context of case 6096...",
    "domain": "Constitutional",
    "citations": 52
  },
  {
    "id": "1853",
    "ecli": "ECLI:NL:RB:2020:5845",
    "date": "2020-06-03",
    "summary": "Ruling on environmental regulations compliance in context of case 5845...",
    "domain": "Criminal",
    "citations": 39
  },
  {
    "id": "1854",
    "ecli": "ECLI:EU:C:2022:1744",
    "date": "2022-09-21",
    "summary": "Ruling on environmental regulations compliance in context of case 1744...",
    "domain": "International",
    "citations": 14
  },
  {
    "id": "1855",
    "ecli": "ECLI:NL:PHR:2021:3056",
    "date": "2021-02-17",
    "summary": "Advisory opinion on criminal procedure in context of case 3056...",
    "domain": "International",
    "citations": 17
  },
  {
    "id": "1856",
    "ecli": "ECLI:EU:C:2022:2977",
    "date": "2022-11-11",
    "summary": "Preliminary ruling on data protection in context of case 2977...",
    "domain": "International",
    "citations": 98
  },
  {
    "id": "1857",
    "ecli": "ECLI:NL:GH:2024:1665",
    "date": "2024-06-07",
    "summary": "Preliminary ruling on data protection in context of case 1665...",
    "domain": "International",
    "citations": 37
  },
  {
    "id": "1858",
    "ecli": "ECLI:EU:C:2020:0363",
    "date": "2020-01-22",
    "summary": "Decision regarding contract law interpretation in context of case 0363...",
    "domain": "Administrative",
    "citations": 99
  },
  {
    "id": "1859",
    "ecli": "ECLI:NL:HR:2020:2159",
    "date": "2020-06-15",
    "summary": "Preliminary ruling on data protection in context of case 2159...",
    "domain": "Familial",
    "citations": 87
  },
  {
    "id": "1860",
    "ecli": "ECLI:NL:PHR:2024:6505",
    "date": "2024-01-15",
    "summary": "Preliminary ruling on data protection in context of case 6505...",
    "domain": "Constitutional",
    "citations": 42
  },
  {
    "id": "1861",
    "ecli": "ECLI:NL:PHR:2021:3021",
    "date": "2021-12-04",
    "summary": "Preliminary ruling on data protection in context of case 3021...",
    "domain": "Civil",
    "citations": 19
  },
  {
    "id": "1862",
    "ecli": "ECLI:NL:PHR:2020:5073",
    "date": "2020-04-17",
    "summary": "Decision on human rights violations in context of case 5073...",
    "domain": "Civil",
    "citations": 39
  },
  {
    "id": "1863",
    "ecli": "ECLI:NL:PHR:2022:1659",
    "date": "2022-05-05",
    "summary": "Preliminary ruling on data protection in context of case 1659...",
    "domain": "Criminal",
    "citations": 39
  },
  {
    "id": "1864",
    "ecli": "ECLI:NL:PHR:2021:6414",
    "date": "2021-03-13",
    "summary": "Advisory opinion on criminal procedure in context of case 6414...",
    "domain": "Constitutional",
    "citations": 99
  },
  {
    "id": "1865",
    "ecli": "ECLI:NL:RB:2021:7936",
    "date": "2021-02-10",
    "summary": "Ruling on environmental regulations compliance in context of case 7936...",
    "domain": "Civil",
    "citations": 20
  },
  {
    "id": "1866",
    "ecli": "ECLI:ECHR:2024:5896",
    "date": "2024-12-17",
    "summary": "Ruling on environmental regulations compliance in context of case 5896...",
    "domain": "Constitutional",
    "citations": 9
  },
  {
    "id": "1867",
    "ecli": "ECLI:NL:PHR:2023:5798",
    "date": "2023-06-08",
    "summary": "Advisory opinion on criminal procedure in context of case 5798...",
    "domain": "Civil",
    "citations": 29
  },
  {
    "id": "1868",
    "ecli": "ECLI:NL:RB:2022:5531",
    "date": "2022-07-24",
    "summary": "Interpretation of maritime law in context of case 5531...",
    "domain": "International",
    "citations": 87
  },
  {
    "id": "1869",
    "ecli": "ECLI:NL:RB:2021:8644",
    "date": "2021-09-18",
    "summary": "Ruling on environmental regulations compliance in context of case 8644...",
    "domain": "Familial",
    "citations": 71
  },
  {
    "id": "1870",
    "ecli": "ECLI:NL:PHR:2023:1701",
    "date": "2023-08-16",
    "summary": "Case concerning labor law disputes in context of case 1701...",
    "domain": "International",
    "citations": 58
  },
  {
    "id": "1871",
    "ecli": "ECLI:EU:C:2020:0985",
    "date": "2020-09-11",
    "summary": "Preliminary ruling on data protection in context of case 0985...",
    "domain": "Constitutional",
    "citations": 38
  },
  {
    "id": "1872",
    "ecli": "ECLI:NL:GH:2024:1798",
    "date": "2024-09-10",
    "summary": "Advisory opinion on criminal procedure in context of case 1798...",
    "domain": "Civil",
    "citations": 60
  },
  {
    "id": "1873",
    "ecli": "ECLI:EU:C:2023:3839",
    "date": "2023-10-06",
    "summary": "Advisory opinion on criminal procedure in context of case 3839...",
    "domain": "Constitutional",
    "citations": 11
  },
  {
    "id": "1874",
    "ecli": "ECLI:NL:RB:2020:6206",
    "date": "2020-11-15",
    "summary": "Preliminary ruling on data protection in context of case 6206...",
    "domain": "International",
    "citations": 9
  },
  {
    "id": "1875",
    "ecli": "ECLI:EU:C:2024:1909",
    "date": "2024-01-04",
    "summary": "Preliminary ruling on data protection in context of case 1909...",
    "domain": "Familial",
    "citations": 74
  },
  {
    "id": "1876",
    "ecli": "ECLI:EU:C:2023:7827",
    "date": "2023-12-04",
    "summary": "Decision regarding contract law interpretation in context of case 7827...",
    "domain": "Familial",
    "citations": 7
  },
  {
    "id": "1877",
    "ecli": "ECLI:NL:PHR:2023:3646",
    "date": "2023-02-20",
    "summary": "Preliminary ruling on data protection in context of case 3646...",
    "domain": "Familial",
    "citations": 85
  },
  {
    "id": "1878",
    "ecli": "ECLI:EU:C:2021:4896",
    "date": "2021-07-17",
    "summary": "Judgment on intellectual property rights in context of case 4896...",
    "domain": "International",
    "citations": 76
  },
  {
    "id": "1879",
    "ecli": "ECLI:NL:GH:2022:1245",
    "date": "2022-11-24",
    "summary": "Judgment on intellectual property rights in context of case 1245...",
    "domain": "Administrative",
    "citations": 68
  },
  {
    "id": "1880",
    "ecli": "ECLI:EU:C:2022:0730",
    "date": "2022-11-19",
    "summary": "Decision on human rights violations in context of case 0730...",
    "domain": "Civil",
    "citations": 55
  },
  {
    "id": "1881",
    "ecli": "ECLI:NL:RB:2023:0975",
    "date": "2023-12-12",
    "summary": "Case concerning labor law disputes in context of case 0975...",
    "domain": "Administrative",
    "citations": 55
  },
  {
    "id": "1882",
    "ecli": "ECLI:EU:C:2020:7037",
    "date": "2020-10-24",
    "summary": "Ruling on antitrust and competition in context of case 7037...",
    "domain": "Administrative",
    "citations": 54
  },
  {
    "id": "1883",
    "ecli": "ECLI:NL:GH:2021:1050",
    "date": "2021-08-13",
    "summary": "Advisory opinion on criminal procedure in context of case 1050...",
    "domain": "Constitutional",
    "citations": 7
  },
  {
    "id": "1884",
    "ecli": "ECLI:NL:PHR:2024:1807",
    "date": "2024-11-23",
    "summary": "Case concerning labor law disputes in context of case 1807...",
    "domain": "International",
    "citations": 28
  },
  {
    "id": "1885",
    "ecli": "ECLI:NL:RB:2024:2959",
    "date": "2024-10-25",
    "summary": "Preliminary ruling on data protection in context of case 2959...",
    "domain": "Civil",
    "citations": 27
  },
  {
    "id": "1886",
    "ecli": "ECLI:NL:GH:2022:1179",
    "date": "2022-09-08",
    "summary": "Ruling on environmental regulations compliance in context of case 1179...",
    "domain": "Criminal",
    "citations": 57
  },
  {
    "id": "1887",
    "ecli": "ECLI:NL:RB:2023:6245",
    "date": "2023-08-02",
    "summary": "Judgment on intellectual property rights in context of case 6245...",
    "domain": "Administrative",
    "citations": 31
  },
  {
    "id": "1888",
    "ecli": "ECLI:NL:GH:2024:9715",
    "date": "2024-10-12",
    "summary": "Preliminary ruling on data protection in context of case 9715...",
    "domain": "Criminal",
    "citations": 27
  },
  {
    "id": "1889",
    "ecli": "ECLI:NL:GH:2023:3376",
    "date": "2023-05-12",
    "summary": "Preliminary ruling on data protection in context of case 3376...",
    "domain": "Constitutional",
    "citations": 21
  },
  {
    "id": "1890",
    "ecli": "ECLI:NL:GH:2020:3433",
    "date": "2020-04-10",
    "summary": "Decision on human rights violations in context of case 3433...",
    "domain": "Civil",
    "citations": 58
  },
  {
    "id": "1891",
    "ecli": "ECLI:NL:RB:2023:3242",
    "date": "2023-10-12",
    "summary": "Ruling on environmental regulations compliance in context of case 3242...",
    "domain": "Civil",
    "citations": 55
  },
  {
    "id": "1892",
    "ecli": "ECLI:NL:HR:2022:7735",
    "date": "2022-09-16",
    "summary": "Advisory opinion on criminal procedure in context of case 7735...",
    "domain": "Constitutional",
    "citations": 27
  },
  {
    "id": "1893",
    "ecli": "ECLI:NL:PHR:2020:8843",
    "date": "2020-05-24",
    "summary": "Decision on human rights violations in context of case 8843...",
    "domain": "Criminal",
    "citations": 30
  },
  {
    "id": "1894",
    "ecli": "ECLI:NL:RB:2020:4364",
    "date": "2020-06-04",
    "summary": "Ruling on environmental regulations compliance in context of case 4364...",
    "domain": "Familial",
    "citations": 18
  },
  {
    "id": "1895",
    "ecli": "ECLI:NL:RB:2023:0226",
    "date": "2023-09-09",
    "summary": "Decision on human rights violations in context of case 0226...",
    "domain": "Criminal",
    "citations": 52
  },
  {
    "id": "1896",
    "ecli": "ECLI:NL:HR:2020:8153",
    "date": "2020-07-18",
    "summary": "Advisory opinion on criminal procedure in context of case 8153...",
    "domain": "Criminal",
    "citations": 87
  },
  {
    "id": "1897",
    "ecli": "ECLI:NL:RB:2023:3725",
    "date": "2023-04-13",
    "summary": "Interpretation of maritime law in context of case 3725...",
    "domain": "Civil",
    "citations": 4
  },
  {
    "id": "1898",
    "ecli": "ECLI:NL:HR:2020:7515",
    "date": "2020-06-07",
    "summary": "Interpretation of maritime law in context of case 7515...",
    "domain": "Criminal",
    "citations": 6
  },
  {
    "id": "1899",
    "ecli": "ECLI:NL:RB:2023:0566",
    "date": "2023-01-21",
    "summary": "Ruling on environmental regulations compliance in context of case 0566...",
    "domain": "Criminal",
    "citations": 16
  },
  {
    "id": "1900",
    "ecli": "ECLI:NL:PHR:2022:4973",
    "date": "2022-12-16",
    "summary": "Ruling on environmental regulations compliance in context of case 4973...",
    "domain": "Familial",
    "citations": 42
  },
  {
    "id": "1901",
    "ecli": "ECLI:NL:HR:2024:4051",
    "date": "2024-06-15",
    "summary": "Advisory opinion on criminal procedure in context of case 4051...",
    "domain": "International",
    "citations": 97
  },
  {
    "id": "1902",
    "ecli": "ECLI:EU:C:2020:5168",
    "date": "2020-11-20",
    "summary": "Judgment on intellectual property rights in context of case 5168...",
    "domain": "Constitutional",
    "citations": 25
  },
  {
    "id": "1903",
    "ecli": "ECLI:NL:PHR:2023:0218",
    "date": "2023-03-23",
    "summary": "Judgment on intellectual property rights in context of case 0218...",
    "domain": "Civil",
    "citations": 1
  },
  {
    "id": "1904",
    "ecli": "ECLI:NL:RB:2021:7153",
    "date": "2021-12-20",
    "summary": "Preliminary ruling on data protection in context of case 7153...",
    "domain": "Constitutional",
    "citations": 19
  },
  {
    "id": "1905",
    "ecli": "ECLI:NL:GH:2022:4128",
    "date": "2022-04-26",
    "summary": "Interpretation of maritime law in context of case 4128...",
    "domain": "Familial",
    "citations": 64
  },
  {
    "id": "1906",
    "ecli": "ECLI:NL:PHR:2021:1552",
    "date": "2021-09-05",
    "summary": "Case concerning labor law disputes in context of case 1552...",
    "domain": "Familial",
    "citations": 37
  },
  {
    "id": "1907",
    "ecli": "ECLI:NL:GH:2024:7331",
    "date": "2024-12-20",
    "summary": "Interpretation of maritime law in context of case 7331...",
    "domain": "Criminal",
    "citations": 42
  },
  {
    "id": "1908",
    "ecli": "ECLI:EU:C:2021:8943",
    "date": "2021-11-05",
    "summary": "Judgment on intellectual property rights in context of case 8943...",
    "domain": "Familial",
    "citations": 50
  },
  {
    "id": "1909",
    "ecli": "ECLI:NL:PHR:2023:4296",
    "date": "2023-12-20",
    "summary": "Judgment regarding consumer protection laws in context of case 4296...",
    "domain": "International",
    "citations": 74
  },
  {
    "id": "1910",
    "ecli": "ECLI:NL:RB:2020:4518",
    "date": "2020-12-18",
    "summary": "Ruling on antitrust and competition in context of case 4518...",
    "domain": "Civil",
    "citations": 90
  },
  {
    "id": "1911",
    "ecli": "ECLI:NL:HR:2021:7220",
    "date": "2021-02-08",
    "summary": "Preliminary ruling on data protection in context of case 7220...",
    "domain": "Constitutional",
    "citations": 22
  },
  {
    "id": "1912",
    "ecli": "ECLI:NL:PHR:2021:8324",
    "date": "2021-09-28",
    "summary": "Judgment on intellectual property rights in context of case 8324...",
    "domain": "Familial",
    "citations": 57
  },
  {
    "id": "1913",
    "ecli": "ECLI:NL:GH:2023:4617",
    "date": "2023-06-03",
    "summary": "Judgment on intellectual property rights in context of case 4617...",
    "domain": "Civil",
    "citations": 73
  },
  {
    "id": "1914",
    "ecli": "ECLI:EU:C:2023:4196",
    "date": "2023-08-06",
    "summary": "Advisory opinion on criminal procedure in context of case 4196...",
    "domain": "Administrative",
    "citations": 2
  },
  {
    "id": "1915",
    "ecli": "ECLI:NL:HR:2020:0331",
    "date": "2020-07-11",
    "summary": "Interpretation of maritime law in context of case 0331...",
    "domain": "Criminal",
    "citations": 61
  },
  {
    "id": "1916",
    "ecli": "ECLI:NL:RB:2020:2794",
    "date": "2020-08-06",
    "summary": "Judgment regarding consumer protection laws in context of case 2794...",
    "domain": "Civil",
    "citations": 77
  },
  {
    "id": "1917",
    "ecli": "ECLI:EU:C:2020:3407",
    "date": "2020-11-10",
    "summary": "Preliminary ruling on data protection in context of case 3407...",
    "domain": "Criminal",
    "citations": 58
  },
  {
    "id": "1918",
    "ecli": "ECLI:ECHR:2024:7800",
    "date": "2024-05-14",
    "summary": "Interpretation of maritime law in context of case 7800...",
    "domain": "Administrative",
    "citations": 73
  },
  {
    "id": "1919",
    "ecli": "ECLI:NL:RB:2024:8032",
    "date": "2024-04-01",
    "summary": "Decision on human rights violations in context of case 8032...",
    "domain": "International",
    "citations": 12
  },
  {
    "id": "1920",
    "ecli": "ECLI:NL:PHR:2020:7339",
    "date": "2020-09-25",
    "summary": "Ruling on antitrust and competition in context of case 7339...",
    "domain": "Civil",
    "citations": 99
  },
  {
    "id": "1921",
    "ecli": "ECLI:NL:RB:2020:6340",
    "date": "2020-01-25",
    "summary": "Preliminary ruling on data protection in context of case 6340...",
    "domain": "Civil",
    "citations": 41
  },
  {
    "id": "1922",
    "ecli": "ECLI:NL:PHR:2022:3538",
    "date": "2022-06-02",
    "summary": "Decision on human rights violations in context of case 3538...",
    "domain": "Constitutional",
    "citations": 47
  },
  {
    "id": "1923",
    "ecli": "ECLI:NL:HR:2021:8463",
    "date": "2021-07-10",
    "summary": "Judgment regarding consumer protection laws in context of case 8463...",
    "domain": "Constitutional",
    "citations": 45
  },
  {
    "id": "1924",
    "ecli": "ECLI:NL:HR:2020:7753",
    "date": "2020-08-08",
    "summary": "Decision on human rights violations in context of case 7753...",
    "domain": "Criminal",
    "citations": 15
  },
  {
    "id": "1925",
    "ecli": "ECLI:NL:PHR:2020:6047",
    "date": "2020-04-01",
    "summary": "Preliminary ruling on data protection in context of case 6047...",
    "domain": "Civil",
    "citations": 40
  },
  {
    "id": "1926",
    "ecli": "ECLI:NL:GH:2022:6450",
    "date": "2022-03-24",
    "summary": "Judgment regarding consumer protection laws in context of case 6450...",
    "domain": "Criminal",
    "citations": 22
  },
  {
    "id": "1927",
    "ecli": "ECLI:NL:PHR:2022:8555",
    "date": "2022-04-06",
    "summary": "Ruling on environmental regulations compliance in context of case 8555...",
    "domain": "Civil",
    "citations": 93
  },
  {
    "id": "1928",
    "ecli": "ECLI:NL:HR:2024:2024",
    "date": "2024-05-24",
    "summary": "Judgment regarding consumer protection laws in context of case 2024...",
    "domain": "International",
    "citations": 45
  },
  {
    "id": "1929",
    "ecli": "ECLI:NL:HR:2021:7276",
    "date": "2021-07-27",
    "summary": "Decision on human rights violations in context of case 7276...",
    "domain": "Administrative",
    "citations": 9
  },
  {
    "id": "1930",
    "ecli": "ECLI:NL:PHR:2022:4578",
    "date": "2022-06-08",
    "summary": "Judgment regarding consumer protection laws in context of case 4578...",
    "domain": "Criminal",
    "citations": 44
  },
  {
    "id": "1931",
    "ecli": "ECLI:NL:GH:2021:1629",
    "date": "2021-12-23",
    "summary": "Preliminary ruling on data protection in context of case 1629...",
    "domain": "Familial",
    "citations": 51
  },
  {
    "id": "1932",
    "ecli": "ECLI:NL:GH:2023:8791",
    "date": "2023-10-20",
    "summary": "Ruling on antitrust and competition in context of case 8791...",
    "domain": "International",
    "citations": 75
  },
  {
    "id": "1933",
    "ecli": "ECLI:NL:RB:2020:2137",
    "date": "2020-11-10",
    "summary": "Advisory opinion on criminal procedure in context of case 2137...",
    "domain": "Familial",
    "citations": 26
  },
  {
    "id": "1934",
    "ecli": "ECLI:NL:GH:2020:0071",
    "date": "2020-12-25",
    "summary": "Ruling on antitrust and competition in context of case 0071...",
    "domain": "Administrative",
    "citations": 62
  },
  {
    "id": "1935",
    "ecli": "ECLI:ECHR:2020:3291",
    "date": "2020-06-11",
    "summary": "Interpretation of maritime law in context of case 3291...",
    "domain": "Civil",
    "citations": 0
  },
  {
    "id": "1936",
    "ecli": "ECLI:EU:C:2020:4830",
    "date": "2020-03-19",
    "summary": "Ruling on antitrust and competition in context of case 4830...",
    "domain": "Familial",
    "citations": 64
  },
  {
    "id": "1937",
    "ecli": "ECLI:ECHR:2022:8456",
    "date": "2022-09-10",
    "summary": "Decision regarding contract law interpretation in context of case 8456...",
    "domain": "Administrative",
    "citations": 7
  },
  {
    "id": "1938",
    "ecli": "ECLI:NL:PHR:2024:3413",
    "date": "2024-09-19",
    "summary": "Judgment on intellectual property rights in context of case 3413...",
    "domain": "Familial",
    "citations": 6
  },
  {
    "id": "1939",
    "ecli": "ECLI:NL:GH:2023:3302",
    "date": "2023-09-04",
    "summary": "Ruling on antitrust and competition in context of case 3302...",
    "domain": "Civil",
    "citations": 92
  },
  {
    "id": "1940",
    "ecli": "ECLI:NL:HR:2021:3016",
    "date": "2021-05-27",
    "summary": "Preliminary ruling on data protection in context of case 3016...",
    "domain": "Constitutional",
    "citations": 99
  },
  {
    "id": "1941",
    "ecli": "ECLI:NL:HR:2024:4043",
    "date": "2024-09-18",
    "summary": "Interpretation of maritime law in context of case 4043...",
    "domain": "Criminal",
    "citations": 57
  },
  {
    "id": "1942",
    "ecli": "ECLI:ECHR:2024:7660",
    "date": "2024-12-01",
    "summary": "Case concerning labor law disputes in context of case 7660...",
    "domain": "Criminal",
    "citations": 14
  },
  {
    "id": "1943",
    "ecli": "ECLI:EU:C:2020:6663",
    "date": "2020-07-15",
    "summary": "Decision regarding contract law interpretation in context of case 6663...",
    "domain": "Familial",
    "citations": 83
  },
  {
    "id": "1944",
    "ecli": "ECLI:EU:C:2024:8605",
    "date": "2024-12-21",
    "summary": "Interpretation of maritime law in context of case 8605...",
    "domain": "Administrative",
    "citations": 76
  },
  {
    "id": "1945",
    "ecli": "ECLI:NL:GH:2021:4619",
    "date": "2021-05-12",
    "summary": "Advisory opinion on criminal procedure in context of case 4619...",
    "domain": "Constitutional",
    "citations": 35
  },
  {
    "id": "1946",
    "ecli": "ECLI:ECHR:2020:9258",
    "date": "2020-08-03",
    "summary": "Ruling on antitrust and competition in context of case 9258...",
    "domain": "Administrative",
    "citations": 69
  },
  {
    "id": "1947",
    "ecli": "ECLI:NL:GH:2022:2113",
    "date": "2022-07-24",
    "summary": "Preliminary ruling on data protection in context of case 2113...",
    "domain": "Civil",
    "citations": 32
  },
  {
    "id": "1948",
    "ecli": "ECLI:EU:C:2020:3744",
    "date": "2020-08-15",
    "summary": "Preliminary ruling on data protection in context of case 3744...",
    "domain": "Civil",
    "citations": 54
  },
  {
    "id": "1949",
    "ecli": "ECLI:NL:PHR:2024:9429",
    "date": "2024-10-19",
    "summary": "Case concerning labor law disputes in context of case 9429...",
    "domain": "International",
    "citations": 11
  },
  {
    "id": "1950",
    "ecli": "ECLI:NL:GH:2023:0206",
    "date": "2023-09-17",
    "summary": "Interpretation of maritime law in context of case 0206...",
    "domain": "Administrative",
    "citations": 64
  },
  {
    "id": "1951",
    "ecli": "ECLI:ECHR:2023:0812",
    "date": "2023-01-04",
    "summary": "Ruling on antitrust and competition in context of case 0812...",
    "domain": "International",
    "citations": 99
  },
  {
    "id": "1952",
    "ecli": "ECLI:NL:HR:2024:5613",
    "date": "2024-05-15",
    "summary": "Interpretation of maritime law in context of case 5613...",
    "domain": "Administrative",
    "citations": 36
  },
  {
    "id": "1953",
    "ecli": "ECLI:NL:PHR:2024:2297",
    "date": "2024-07-17",
    "summary": "Judgment regarding consumer protection laws in context of case 2297...",
    "domain": "Constitutional",
    "citations": 50
  },
  {
    "id": "1954",
    "ecli": "ECLI:NL:PHR:2021:4802",
    "date": "2021-07-01",
    "summary": "Ruling on antitrust and competition in context of case 4802...",
    "domain": "Criminal",
    "citations": 18
  },
  {
    "id": "1955",
    "ecli": "ECLI:NL:HR:2024:6338",
    "date": "2024-02-12",
    "summary": "Decision regarding contract law interpretation in context of case 6338...",
    "domain": "Civil",
    "citations": 59
  },
  {
    "id": "1956",
    "ecli": "ECLI:ECHR:2020:0360",
    "date": "2020-12-07",
    "summary": "Ruling on antitrust and competition in context of case 0360...",
    "domain": "Familial",
    "citations": 25
  },
  {
    "id": "1957",
    "ecli": "ECLI:EU:C:2024:6118",
    "date": "2024-06-14",
    "summary": "Advisory opinion on criminal procedure in context of case 6118...",
    "domain": "Constitutional",
    "citations": 74
  },
  {
    "id": "1958",
    "ecli": "ECLI:ECHR:2023:4037",
    "date": "2023-09-08",
    "summary": "Decision on human rights violations in context of case 4037...",
    "domain": "Familial",
    "citations": 74
  },
  {
    "id": "1959",
    "ecli": "ECLI:NL:PHR:2021:4009",
    "date": "2021-12-10",
    "summary": "Interpretation of maritime law in context of case 4009...",
    "domain": "Familial",
    "citations": 56
  },
  {
    "id": "1960",
    "ecli": "ECLI:EU:C:2024:1257",
    "date": "2024-11-03",
    "summary": "Ruling on antitrust and competition in context of case 1257...",
    "domain": "Constitutional",
    "citations": 16
  },
  {
    "id": "1961",
    "ecli": "ECLI:ECHR:2021:8696",
    "date": "2021-02-23",
    "summary": "Advisory opinion on criminal procedure in context of case 8696...",
    "domain": "International",
    "citations": 99
  },
  {
    "id": "1962",
    "ecli": "ECLI:NL:PHR:2024:1548",
    "date": "2024-07-06",
    "summary": "Decision regarding contract law interpretation in context of case 1548...",
    "domain": "Constitutional",
    "citations": 4
  },
  {
    "id": "1963",
    "ecli": "ECLI:NL:GH:2021:6645",
    "date": "2021-09-22",
    "summary": "Advisory opinion on criminal procedure in context of case 6645...",
    "domain": "International",
    "citations": 43
  },
  {
    "id": "1964",
    "ecli": "ECLI:NL:PHR:2022:1802",
    "date": "2022-02-18",
    "summary": "Advisory opinion on criminal procedure in context of case 1802...",
    "domain": "Administrative",
    "citations": 95
  },
  {
    "id": "1965",
    "ecli": "ECLI:ECHR:2022:3182",
    "date": "2022-11-12",
    "summary": "Preliminary ruling on data protection in context of case 3182...",
    "domain": "Familial",
    "citations": 5
  },
  {
    "id": "1966",
    "ecli": "ECLI:ECHR:2021:8606",
    "date": "2021-04-01",
    "summary": "Interpretation of maritime law in context of case 8606...",
    "domain": "Criminal",
    "citations": 81
  },
  {
    "id": "1967",
    "ecli": "ECLI:NL:RB:2024:7669",
    "date": "2024-08-14",
    "summary": "Judgment regarding consumer protection laws in context of case 7669...",
    "domain": "Administrative",
    "citations": 21
  },
  {
    "id": "1968",
    "ecli": "ECLI:NL:RB:2020:8022",
    "date": "2020-05-12",
    "summary": "Interpretation of maritime law in context of case 8022...",
    "domain": "Criminal",
    "citations": 26
  },
  {
    "id": "1969",
    "ecli": "ECLI:NL:GH:2022:9019",
    "date": "2022-11-05",
    "summary": "Preliminary ruling on data protection in context of case 9019...",
    "domain": "Criminal",
    "citations": 19
  },
  {
    "id": "1970",
    "ecli": "ECLI:ECHR:2021:0910",
    "date": "2021-06-17",
    "summary": "Case concerning labor law disputes in context of case 0910...",
    "domain": "Civil",
    "citations": 10
  },
  {
    "id": "1971",
    "ecli": "ECLI:NL:GH:2022:8399",
    "date": "2022-04-24",
    "summary": "Judgment on intellectual property rights in context of case 8399...",
    "domain": "Administrative",
    "citations": 40
  },
  {
    "id": "1972",
    "ecli": "ECLI:EU:C:2023:0994",
    "date": "2023-04-24",
    "summary": "Advisory opinion on criminal procedure in context of case 0994...",
    "domain": "Administrative",
    "citations": 65
  },
  {
    "id": "1973",
    "ecli": "ECLI:EU:C:2021:8648",
    "date": "2021-02-17",
    "summary": "Judgment regarding consumer protection laws in context of case 8648...",
    "domain": "Constitutional",
    "citations": 53
  },
  {
    "id": "1974",
    "ecli": "ECLI:NL:HR:2024:8861",
    "date": "2024-09-26",
    "summary": "Interpretation of maritime law in context of case 8861...",
    "domain": "Civil",
    "citations": 67
  },
  {
    "id": "1975",
    "ecli": "ECLI:NL:HR:2020:4082",
    "date": "2020-10-09",
    "summary": "Preliminary ruling on data protection in context of case 4082...",
    "domain": "Criminal",
    "citations": 27
  },
  {
    "id": "1976",
    "ecli": "ECLI:ECHR:2023:5007",
    "date": "2023-10-17",
    "summary": "Ruling on antitrust and competition in context of case 5007...",
    "domain": "Constitutional",
    "citations": 19
  },
  {
    "id": "1977",
    "ecli": "ECLI:NL:HR:2022:7869",
    "date": "2022-04-25",
    "summary": "Interpretation of maritime law in context of case 7869...",
    "domain": "International",
    "citations": 64
  },
  {
    "id": "1978",
    "ecli": "ECLI:NL:HR:2024:6679",
    "date": "2024-06-12",
    "summary": "Advisory opinion on criminal procedure in context of case 6679...",
    "domain": "Criminal",
    "citations": 84
  },
  {
    "id": "1979",
    "ecli": "ECLI:NL:GH:2023:8911",
    "date": "2023-01-14",
    "summary": "Interpretation of maritime law in context of case 8911...",
    "domain": "Civil",
    "citations": 16
  },
  {
    "id": "1980",
    "ecli": "ECLI:NL:RB:2020:6026",
    "date": "2020-02-27",
    "summary": "Preliminary ruling on data protection in context of case 6026...",
    "domain": "International",
    "citations": 15
  },
  {
    "id": "1981",
    "ecli": "ECLI:NL:HR:2022:4425",
    "date": "2022-01-03",
    "summary": "Judgment on intellectual property rights in context of case 4425...",
    "domain": "Criminal",
    "citations": 40
  },
  {
    "id": "1982",
    "ecli": "ECLI:NL:PHR:2020:9164",
    "date": "2020-03-25",
    "summary": "Preliminary ruling on data protection in context of case 9164...",
    "domain": "Constitutional",
    "citations": 44
  },
  {
    "id": "1983",
    "ecli": "ECLI:NL:GH:2020:1541",
    "date": "2020-02-21",
    "summary": "Decision regarding contract law interpretation in context of case 1541...",
    "domain": "Administrative",
    "citations": 0
  },
  {
    "id": "1984",
    "ecli": "ECLI:ECHR:2020:7265",
    "date": "2020-03-03",
    "summary": "Interpretation of maritime law in context of case 7265...",
    "domain": "Criminal",
    "citations": 16
  },
  {
    "id": "1985",
    "ecli": "ECLI:NL:GH:2023:4533",
    "date": "2023-01-01",
    "summary": "Ruling on antitrust and competition in context of case 4533...",
    "domain": "Administrative",
    "citations": 88
  },
  {
    "id": "1986",
    "ecli": "ECLI:NL:HR:2020:6820",
    "date": "2020-04-02",
    "summary": "Interpretation of maritime law in context of case 6820...",
    "domain": "Criminal",
    "citations": 76
  },
  {
    "id": "1987",
    "ecli": "ECLI:NL:PHR:2024:9114",
    "date": "2024-01-22",
    "summary": "Decision regarding contract law interpretation in context of case 9114...",
    "domain": "International",
    "citations": 99
  },
  {
    "id": "1988",
    "ecli": "ECLI:NL:PHR:2023:2349",
    "date": "2023-07-25",
    "summary": "Case concerning labor law disputes in context of case 2349...",
    "domain": "International",
    "citations": 34
  },
  {
    "id": "1989",
    "ecli": "ECLI:NL:HR:2022:2758",
    "date": "2022-08-12",
    "summary": "Decision regarding contract law interpretation in context of case 2758...",
    "domain": "Familial",
    "citations": 81
  },
  {
    "id": "1990",
    "ecli": "ECLI:EU:C:2020:1727",
    "date": "2020-04-13",
    "summary": "Interpretation of maritime law in context of case 1727...",
    "domain": "International",
    "citations": 26
  },
  {
    "id": "1991",
    "ecli": "ECLI:EU:C:2021:2687",
    "date": "2021-12-06",
    "summary": "Interpretation of maritime law in context of case 2687...",
    "domain": "Civil",
    "citations": 18
  },
  {
    "id": "1992",
    "ecli": "ECLI:NL:GH:2024:3424",
    "date": "2024-05-23",
    "summary": "Ruling on antitrust and competition in context of case 3424...",
    "domain": "Civil",
    "citations": 94
  },
  {
    "id": "1993",
    "ecli": "ECLI:ECHR:2022:5602",
    "date": "2022-11-03",
    "summary": "Decision on human rights violations in context of case 5602...",
    "domain": "Civil",
    "citations": 51
  },
  {
    "id": "1994",
    "ecli": "ECLI:NL:RB:2020:2317",
    "date": "2020-04-21",
    "summary": "Ruling on environmental regulations compliance in context of case 2317...",
    "domain": "International",
    "citations": 76
  },
  {
    "id": "1995",
    "ecli": "ECLI:NL:PHR:2023:5245",
    "date": "2023-12-23",
    "summary": "Judgment on intellectual property rights in context of case 5245...",
    "domain": "Civil",
    "citations": 46
  },
  {
    "id": "1996",
    "ecli": "ECLI:ECHR:2024:3261",
    "date": "2024-04-01",
    "summary": "Interpretation of maritime law in context of case 3261...",
    "domain": "Administrative",
    "citations": 30
  },
  {
    "id": "1997",
    "ecli": "ECLI:NL:PHR:2022:9815",
    "date": "2022-04-26",
    "summary": "Decision on human rights violations in context of case 9815...",
    "domain": "Administrative",
    "citations": 35
  },
  {
    "id": "1998",
    "ecli": "ECLI:NL:PHR:2021:1335",
    "date": "2021-03-20",
    "summary": "Ruling on antitrust and competition in context of case 1335...",
    "domain": "Constitutional",
    "citations": 57
  },
  {
    "id": "1999",
    "ecli": "ECLI:NL:RB:2020:5659",
    "date": "2020-03-06",
    "summary": "Interpretation of maritime law in context of case 5659...",
    "domain": "Familial",
    "citations": 53
  }
]