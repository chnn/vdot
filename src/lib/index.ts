const RACE_TIMES = [
  {
    VDOT: 30,
    "1500m": "8:30",
    Mile: "9:11",
    "3000m": "17:56",
    "2mile": "19:19",
    "5000m": "30:40",
    "10K": "63:46",
    "15K": "98:14",
    HalfMarathon: "2:21:04",
    Marathon: "4:49:17",
  },
  {
    VDOT: 31,
    "1500m": "8:15",
    Mile: "8:55",
    "3000m": "17:27",
    "2mile": "18:48",
    "5000m": "29:51",
    "10K": "62:03",
    "15K": "95:36",
    HalfMarathon: "2:17:21",
    Marathon: "4:41:57",
  },
  {
    VDOT: 32,
    "1500m": "8:02",
    Mile: "8:41",
    "3000m": "16:59",
    "2mile": "18:18",
    "5000m": "29:05",
    "10K": "60:26",
    "15K": "93:07",
    HalfMarathon: "2:13:49",
    Marathon: "4:34:59",
  },
  {
    VDOT: 33,
    "1500m": "7:49",
    Mile: "8:27",
    "3000m": "16:33",
    "2mile": "17:50",
    "5000m": "28:21",
    "10K": "58:54",
    "15K": "90:45",
    HalfMarathon: "2:10:27",
    Marathon: "4:28:22",
  },
  {
    VDOT: 34,
    "1500m": "7:37",
    Mile: "8:14",
    "3000m": "16:09",
    "2mile": "17:24",
    "5000m": "27:39",
    "10K": "57:26",
    "15K": "88:30",
    HalfMarathon: "2:07:16",
    Marathon: "4:22:03",
  },
  {
    VDOT: 35,
    "1500m": "7:25",
    Mile: "8:01",
    "3000m": "15:45",
    "2mile": "16:58",
    "5000m": "27:00",
    "10K": "56:03",
    "15K": "86:22",
    HalfMarathon: "2:04:13",
    Marathon: "4:16:03",
  },
  {
    VDOT: 36,
    "1500m": "7:14",
    Mile: "7:49",
    "3000m": "15:23",
    "2mile": "16:34",
    "5000m": "26:22",
    "10K": "54:44",
    "15K": "84:20",
    HalfMarathon: "2:01:19",
    Marathon: "4:10:19",
  },
  {
    VDOT: 37,
    "1500m": "7:04",
    Mile: "7:38",
    "3000m": "15:01",
    "2mile": "16:11",
    "5000m": "25:46",
    "10K": "53:29",
    "15K": "82:24",
    HalfMarathon: "1:58:34",
    Marathon: "4:04:50",
  },
  {
    VDOT: 38,
    "1500m": "6:54",
    Mile: "7:27",
    "3000m": "14:41",
    "2mile": "15:49",
    "5000m": "25:12",
    "10K": "52:17",
    "15K": "80:33",
    HalfMarathon: "1:55:55",
    Marathon: "3:59:35",
  },
  {
    VDOT: 39,
    "1500m": "6:44",
    Mile: "7:17",
    "3000m": "14:21",
    "2mile": "15:29",
    "5000m": "24:39",
    "10K": "51:09",
    "15K": "78:47",
    HalfMarathon: "1:53:24",
    Marathon: "3:54:34",
  },
  {
    VDOT: 40,
    "1500m": "6:35",
    Mile: "7:07",
    "3000m": "14:03",
    "2mile": "15:08",
    "5000m": "24:08",
    "10K": "50:03",
    "15K": "77:06",
    HalfMarathon: "1:50:59",
    Marathon: "3:49:45",
  },
  {
    VDOT: 41,
    "1500m": "6:27",
    Mile: "6:58",
    "3000m": "13:45",
    "2mile": "14:49",
    "5000m": "23:38",
    "10K": "49:01",
    "15K": "75:29",
    HalfMarathon: "1:48:40",
    Marathon: "3:45:09",
  },
  {
    VDOT: 42,
    "1500m": "6:19",
    Mile: "6:49",
    "3000m": "13:28",
    "2mile": "14:31",
    "5000m": "23:09",
    "10K": "48:01",
    "15K": "73:56",
    HalfMarathon: "1:46:27",
    Marathon: "3:40:43",
  },
  {
    VDOT: 43,
    "1500m": "6:11",
    Mile: "6:41",
    "3000m": "13:11",
    "2mile": "14:13",
    "5000m": "22:41",
    "10K": "47:04",
    "15K": "72:27",
    HalfMarathon: "1:44:20",
    Marathon: "3:36:28",
  },
  {
    VDOT: 44,
    "1500m": "6:03",
    Mile: "6:32",
    "3000m": "12:55",
    "2mile": "13:56",
    "5000m": "22:15",
    "10K": "46:09",
    "15K": "71:02",
    HalfMarathon: "1:42:17",
    Marathon: "3:32:23",
  },
  {
    VDOT: 45,
    "1500m": "5:56",
    Mile: "6:25",
    "3000m": "12:40",
    "2mile": "13:40",
    "5000m": "21:50",
    "10K": "45:16",
    "15K": "69:40",
    HalfMarathon: "1:40:20",
    Marathon: "3:28:26",
  },
  {
    VDOT: 46,
    "1500m": "5:49",
    Mile: "6:17",
    "3000m": "12:26",
    "2mile": "13:25",
    "5000m": "21:25",
    "10K": "44:25",
    "15K": "68:22",
    HalfMarathon: "1:38:27",
    Marathon: "3:24:39",
  },
  {
    VDOT: 47,
    "1500m": "5:42",
    Mile: "6:10",
    "3000m": "12:12",
    "2mile": "13:10",
    "5000m": "21:02",
    "10K": "43:36",
    "15K": "67:06",
    HalfMarathon: "1:36:38",
    Marathon: "3:21:00",
  },
  {
    VDOT: 48,
    "1500m": "5:36",
    Mile: "6:03",
    "3000m": "11:58",
    "2mile": "12:55",
    "5000m": "20:39",
    "10K": "42:50",
    "15K": "65:53",
    HalfMarathon: "1:34:53",
    Marathon: "3:17:29",
  },
  {
    VDOT: 49,
    "1500m": "5:30",
    Mile: "5:56",
    "3000m": "11:45",
    "2mile": "12:41",
    "5000m": "20:18",
    "10K": "42:04",
    "15K": "64:44",
    HalfMarathon: "1:33:12",
    Marathon: "3:14:06",
  },
  {
    VDOT: 50,
    "1500m": "5:24",
    Mile: "5:50",
    "3000m": "11:33",
    "2mile": "12:28",
    "5000m": "19:57",
    "10K": "41:21",
    "15K": "63:36",
    HalfMarathon: "1:31:35",
    Marathon: "3:10:49",
  },
  {
    VDOT: 51,
    "1500m": "5:18",
    Mile: "5:44",
    "3000m": "11:21",
    "2mile": "12:15",
    "5000m": "19:36",
    "10K": "40:39",
    "15K": "62:31",
    HalfMarathon: "1:30:02",
    Marathon: "3:07:39",
  },
  {
    VDOT: 52,
    "1500m": "5:13",
    Mile: "5:38",
    "3000m": "11:09",
    "2mile": "12:02",
    "5000m": "19:17",
    "10K": "39:59",
    "15K": "61:29",
    HalfMarathon: "1:28:31",
    Marathon: "3:04:36",
  },
  {
    VDOT: 53,
    "1500m": "5:07",
    Mile: "5:32",
    "3000m": "10:58",
    "2mile": "11:50",
    "5000m": "18:58",
    "10K": "39:20",
    "15K": "60:28",
    HalfMarathon: "1:27:04",
    Marathon: "3:01:39",
  },
  {
    VDOT: 54,
    "1500m": "5:02",
    Mile: "5:27",
    "3000m": "10:47",
    "2mile": "11:39",
    "5000m": "18:40",
    "10K": "38:42",
    "15K": "59:30",
    HalfMarathon: "1:25:40",
    Marathon: "2:58:47",
  },
  {
    VDOT: 55,
    "1500m": "4:57",
    Mile: "5:21",
    "3000m": "10:37",
    "2mile": "11:28",
    "5000m": "18:22",
    "10K": "38:06",
    "15K": "58:33",
    HalfMarathon: "1:24:18",
    Marathon: "2:56:01",
  },
  {
    VDOT: 56,
    "1500m": "4:53",
    Mile: "5:16",
    "3000m": "10:27",
    "2mile": "11:17",
    "5000m": "18:05",
    "10K": "37:31",
    "15K": "57:39",
    HalfMarathon: "1:23:00",
    Marathon: "2:53:20",
  },
  {
    VDOT: 57,
    "1500m": "4:48",
    Mile: "5:11",
    "3000m": "10:17",
    "2mile": "11:06",
    "5000m": "17:49",
    "10K": "36:57",
    "15K": "56:46",
    HalfMarathon: "1:21:43",
    Marathon: "2:50:45",
  },
  {
    VDOT: 58,
    "1500m": "4:44",
    Mile: "5:06",
    "3000m": "10:08",
    "2mile": "10:56",
    "5000m": "17:33",
    "10K": "36:24",
    "15K": "55:55",
    HalfMarathon: "1:20:30",
    Marathon: "2:48:14",
  },
  {
    VDOT: 59,
    "1500m": "4:39",
    Mile: "5:02",
    "3000m": "9:58",
    "2mile": "10:46",
    "5000m": "17:17",
    "10K": "35:52",
    "15K": "55:06",
    HalfMarathon: "1:19:18",
    Marathon: "2:45:47",
  },
  {
    VDOT: 60,
    "1500m": "4:35",
    Mile: "4:57",
    "3000m": "9:50",
    "2mile": "10:37",
    "5000m": "17:03",
    "10K": "35:22",
    "15K": "54:18",
    HalfMarathon: "1:18:09",
    Marathon: "2:43:25",
  },
  {
    VDOT: 61,
    "1500m": "4:31",
    Mile: "4:53",
    "3000m": "9:41",
    "2mile": "10:27",
    "5000m": "16:48",
    "10K": "34:52",
    "15K": "53:32",
    HalfMarathon: "1:17:02",
    Marathon: "2:41:08",
  },
  {
    VDOT: 62,
    "1500m": "4:27",
    Mile: "4:49",
    "3000m": "9:33",
    "2mile": "10:18",
    "5000m": "16:34",
    "10K": "34:23",
    "15K": "52:47",
    HalfMarathon: "1:15:57",
    Marathon: "2:38:54",
  },
  {
    VDOT: 63,
    "1500m": "4:24",
    Mile: "4:45",
    "3000m": "9:25",
    "2mile": "10:10",
    "5000m": "16:20",
    "10K": "33:55",
    "15K": "52:03",
    HalfMarathon: "1:14:54",
    Marathon: "2:36:44",
  },
  {
    VDOT: 64,
    "1500m": "4:20",
    Mile: "4:41",
    "3000m": "9:17",
    "2mile": "10:01",
    "5000m": "16:07",
    "10K": "33:28",
    "15K": "51:21",
    HalfMarathon: "1:13:53",
    Marathon: "2:34:38",
  },
  {
    VDOT: 65,
    "1500m": "4:16",
    Mile: "4:37",
    "3000m": "9:09",
    "2mile": "9:53",
    "5000m": "15:54",
    "10K": "33:01",
    "15K": "50:40",
    HalfMarathon: "1:12:53",
    Marathon: "2:32:35",
  },
  {
    VDOT: 66,
    "1500m": "4:13",
    Mile: "4:33",
    "3000m": "9:02",
    "2mile": "9:45",
    "5000m": "15:42",
    "10K": "32:35",
    "15K": "50:00",
    HalfMarathon: "1:11:56",
    Marathon: "2:30:36",
  },
  {
    VDOT: 67,
    "1500m": "4:10",
    Mile: "4:30",
    "3000m": "8:55",
    "2mile": "9:37",
    "5000m": "15:29",
    "10K": "32:11",
    "15K": "49:22",
    HalfMarathon: "1:11:00",
    Marathon: "2:28:40",
  },
  {
    VDOT: 68,
    "1500m": "4:06",
    Mile: "4:26",
    "3000m": "8:48",
    "2mile": "9:30",
    "5000m": "15:18",
    "10K": "31:46",
    "15K": "48:44",
    HalfMarathon: "1:10:05",
    Marathon: "2:26:47",
  },
  {
    VDOT: 69,
    "1500m": "4:03",
    Mile: "4:23",
    "3000m": "8:41",
    "2mile": "9:23",
    "5000m": "15:06",
    "10K": "31:23",
    "15K": "48:08",
    HalfMarathon: "1:09:12",
    Marathon: "2:24:57",
  },
  {
    VDOT: 70,
    "1500m": "4:00",
    Mile: "4:19",
    "3000m": "8:34",
    "2mile": "9:16",
    "5000m": "14:55",
    "10K": "31:00",
    "15K": "47:32",
    HalfMarathon: "1:08:21",
    Marathon: "2:23:10",
  },
  {
    VDOT: 71,
    "1500m": "3:57",
    Mile: "4:16",
    "3000m": "8:28",
    "2mile": "9:09",
    "5000m": "14:44",
    "10K": "30:38",
    "15K": "46:58",
    HalfMarathon: "1:07:31",
    Marathon: "2:21:26",
  },
  {
    VDOT: 72,
    "1500m": "3:54",
    Mile: "4:13",
    "3000m": "8:22",
    "2mile": "9:02",
    "5000m": "14:33",
    "10K": "30:16",
    "15K": "46:24",
    HalfMarathon: "1:06:42",
    Marathon: "2:19:44",
  },
  {
    VDOT: 73,
    "1500m": "3:52",
    Mile: "4:10",
    "3000m": "8:16",
    "2mile": "8:55",
    "5000m": "14:23",
    "10K": "29:55",
    "15K": "45:51",
    HalfMarathon: "1:05:54",
    Marathon: "2:18:05",
  },
  {
    VDOT: 74,
    "1500m": "3:49",
    Mile: "4:07",
    "3000m": "8:10",
    "2mile": "8:49",
    "5000m": "14:13",
    "10K": "29:34",
    "15K": "45:19",
    HalfMarathon: "1:05:08",
    Marathon: "2:16:29",
  },
  {
    VDOT: 75,
    "1500m": "3:46",
    Mile: "4:04",
    "3000m": "8:04",
    "2mile": "8:43",
    "5000m": "14:03",
    "10K": "29:14",
    "15K": "44:48",
    HalfMarathon: "1:04:23",
    Marathon: "2:14:55",
  },
  {
    VDOT: 76,
    "1500m": "3:44",
    Mile: "4:02",
    "3000m": "7:58",
    "2mile": "8:37",
    "5000m": "13:54",
    "10K": "28:55",
    "15K": "44:18",
    HalfMarathon: "1:03:39",
    Marathon: "2:13:23",
  },
  {
    VDOT: 77,
    "1500m": "3:41+",
    Mile: "3:58+",
    "3000m": "7:53",
    "2mile": "8:31",
    "5000m": "13:44",
    "10K": "28:36",
    "15K": "43:49",
    HalfMarathon: "1:02:56",
    Marathon: "2:11:54",
  },
  {
    VDOT: 78,
    "1500m": "3:38.8",
    Mile: "3:56.2",
    "3000m": "7:48",
    "2mile": "8:25",
    "5000m": "13:35",
    "10K": "28:17",
    "15K": "43:20",
    HalfMarathon: "1:02:15",
    Marathon: "2:10:27",
  },
  {
    VDOT: 79,
    "1500m": "3:36.5",
    Mile: "3:53.7",
    "3000m": "7:43",
    "2mile": "8:20",
    "5000m": "13:26",
    "10K": "27:59",
    "15K": "42:52",
    HalfMarathon: "1:01:34",
    Marathon: "2:09:02",
  },
  {
    VDOT: 80,
    "1500m": "3:34.2",
    Mile: "3:51.2",
    "3000m": "7:37.5",
    "2mile": "8:14.2",
    "5000m": "13:17.8",
    "10K": "27:41",
    "15K": "42:25",
    HalfMarathon: "1:00:54",
    Marathon: "2:07:38",
  },
  {
    VDOT: 81,
    "1500m": "3:31.9",
    Mile: "3:48.7",
    "3000m": "7:32.5",
    "2mile": "8:08.9",
    "5000m": "13:09.3",
    "10K": "27:24",
    "15K": "41:58",
    HalfMarathon: "1:00:15",
    Marathon: "2:06:17",
  },
  {
    VDOT: 82,
    "1500m": "3:29.7",
    Mile: "3:46.4",
    "3000m": "7:27.7",
    "2mile": "8:03.7",
    "5000m": "13:01.1",
    "10K": "27:07",
    "15K": "41:32",
    HalfMarathon: "59:38",
    Marathon: "2:04:57",
  },
  {
    VDOT: 83,
    "1500m": "3:27.6",
    Mile: "3:44.0",
    "3000m": "7:23.0",
    "2mile": "7:58.6",
    "5000m": "12:53.0",
    "10K": "26:51",
    "15K": "41:06",
    HalfMarathon: "59:01",
    Marathon: "2:03:40",
  },
  {
    VDOT: 84,
    "1500m": "3:25.5",
    Mile: "3:41.8",
    "3000m": "7:18.5",
    "2mile": "7:53.6",
    "5000m": "12:45.2",
    "10K": "26:34",
    "15K": "40:42",
    HalfMarathon: "58:25",
    Marathon: "2:02:24",
  },
  {
    VDOT: 85,
    "1500m": "3:23.5",
    Mile: "3:39.6",
    "3000m": "7:14.0",
    "2mile": "7:48.8",
    "5000m": "12:37.4",
    "10K": "26:19",
    "15K": "40:17",
    HalfMarathon: "57:50",
    Marathon: "2:01:10",
  },
];

const TRAINING_TIMES = [
  {
    vdot: 30,
    easy: {
      km: "7:27-8:14",
      mile: "12:00-13:16",
    },
    marathon: {
      km: "7:03",
      mile: "11:21",
    },
    threshold: {
      "400m": "2:33",
      km: "6:24",
      mile: "10:18",
    },
    interval: {
      "400m": "2:22",
      km: null,
      "1200m": null,
      mile: null,
    },
    repetition: {
      "200m": "67",
      "300m": "1:41",
      "400m": null,
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 31,
    easy: {
      km: "7:16-8:02",
      mile: "11:41-12:57",
    },
    marathon: {
      km: "6:52",
      mile: "11:02",
    },
    threshold: {
      "400m": "2:30",
      km: "6:14",
      mile: "10:02",
    },
    interval: {
      "400m": "2:18",
      km: null,
      "1200m": null,
      mile: null,
    },
    repetition: {
      "200m": "65",
      "300m": "98",
      "400m": null,
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 32,
    easy: {
      km: "7:05-7:52",
      mile: "11:24-12:39",
    },
    marathon: {
      km: "6:40",
      mile: "10:44",
    },
    threshold: {
      "400m": "2:26",
      km: "6:05",
      mile: "9:47",
    },
    interval: {
      "400m": "2:14",
      km: null,
      "1200m": null,
      mile: null,
    },
    repetition: {
      "200m": "63",
      "300m": "95",
      "400m": null,
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 33,
    easy: {
      km: "6:55-7:41",
      mile: "11:07-12:21",
    },
    marathon: {
      km: "6:30",
      mile: "10:27",
    },
    threshold: {
      "400m": "2:23",
      km: "5:56",
      mile: "9:33",
    },
    interval: {
      "400m": "2:11",
      km: null,
      "1200m": null,
      mile: null,
    },
    repetition: {
      "200m": "61",
      "300m": "92",
      "400m": null,
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 34,
    easy: {
      km: "6:45-7:31",
      mile: "10:52-12:05",
    },
    marathon: {
      km: "6:20",
      mile: "10:11",
    },
    threshold: {
      "400m": "2:19",
      km: "5:48",
      mile: "9:20",
    },
    interval: {
      "400m": "2:08",
      km: null,
      "1200m": null,
      mile: null,
    },
    repetition: {
      "200m": "60",
      "300m": "90",
      "400m": "2:00",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 35,
    easy: {
      km: "6:36-7:21",
      mile: "10:37-11:49",
    },
    marathon: {
      km: "6:10",
      mile: "9:56",
    },
    threshold: {
      "400m": "2:16",
      km: "5:40",
      mile: "9:07",
    },
    interval: {
      "400m": "2:05",
      km: null,
      "1200m": null,
      mile: null,
    },
    repetition: {
      "200m": "58",
      "300m": "87",
      "400m": "1:57",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 36,
    easy: {
      km: "6:27-7:11",
      mile: "10:23-11:34",
    },
    marathon: {
      km: "6:01",
      mile: "9:41",
    },
    threshold: {
      "400m": "2:13",
      km: "5:33",
      mile: "8:55",
    },
    interval: {
      "400m": "2:02",
      km: null,
      "1200m": null,
      mile: null,
    },
    repetition: {
      "200m": "57",
      "300m": "85",
      "400m": "1:54",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 37,
    easy: {
      km: "6:19-7:02",
      mile: "10:09-11:20",
    },
    marathon: {
      km: "5:53",
      mile: "9:28",
    },
    threshold: {
      "400m": "2:10",
      km: "5:26",
      mile: "8:44",
    },
    interval: {
      "400m": "1:59",
      km: "5:00",
      "1200m": null,
      mile: null,
    },
    repetition: {
      "200m": "55",
      "300m": "83",
      "400m": "1:51",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 38,
    easy: {
      km: "6:11-6:54",
      mile: "9:56-11:06",
    },
    marathon: {
      km: "5:45",
      mile: "9:15",
    },
    threshold: {
      "400m": "2:07",
      km: "5:19",
      mile: "8:33",
    },
    interval: {
      "400m": "1:56",
      km: "4:54",
      "1200m": null,
      mile: null,
    },
    repetition: {
      "200m": "54",
      "300m": "81",
      "400m": "1:48",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 39,
    easy: {
      km: "6:03-6:46",
      mile: "9:44-10:53",
    },
    marathon: {
      km: "5:37",
      mile: "9:02",
    },
    threshold: {
      "400m": "2:05",
      km: "5:12",
      mile: "8:22",
    },
    interval: {
      "400m": "1:54",
      km: "4:48",
      "1200m": null,
      mile: null,
    },
    repetition: {
      "200m": "53",
      "300m": "80",
      "400m": "1:46",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 40,
    easy: {
      km: "5:56-6:38",
      mile: "9:32-10:41",
    },
    marathon: {
      km: "5:29",
      mile: "8:50",
    },
    threshold: {
      "400m": "2:02",
      km: "5:06",
      mile: "8:12",
    },
    interval: {
      "400m": "1:52",
      km: "4:42",
      "1200m": null,
      mile: null,
    },
    repetition: {
      "200m": "52",
      "300m": "78",
      "400m": "1:44",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 41,
    easy: {
      km: "5:49-6:31",
      mile: "9:21-10:28",
    },
    marathon: {
      km: "5:22",
      mile: "8:39",
    },
    threshold: {
      "400m": "2:00",
      km: "5:00",
      mile: "8:02",
    },
    interval: {
      "400m": "1:50",
      km: "4:36",
      "1200m": null,
      mile: null,
    },
    repetition: {
      "200m": "51",
      "300m": "77",
      "400m": "1:42",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 42,
    easy: {
      km: "5:42-6:23",
      mile: "9:10-10:17",
    },
    marathon: {
      km: "5:16",
      mile: "8:28",
    },
    threshold: {
      "400m": "1:57",
      km: "4:54",
      mile: "7:52",
    },
    interval: {
      "400m": "1:48",
      km: "4:31",
      "1200m": null,
      mile: null,
    },
    repetition: {
      "200m": "50",
      "300m": "75",
      "400m": "1:40",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 43,
    easy: {
      km: "5:35-6:16",
      mile: "9:00-10:05",
    },
    marathon: {
      km: "5:09",
      mile: "8:17",
    },
    threshold: {
      "400m": "1:55",
      km: "4:49",
      mile: "7:42",
    },
    interval: {
      "400m": "1:46",
      km: "4:26",
      "1200m": null,
      mile: null,
    },
    repetition: {
      "200m": "49",
      "300m": "74",
      "400m": "98",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 44,
    easy: {
      km: "5:29-6:10",
      mile: "8:50-9:55",
    },
    marathon: {
      km: "5:03",
      mile: "8:07",
    },
    threshold: {
      "400m": "1:53",
      km: "4:43",
      mile: "7:33",
    },
    interval: {
      "400m": "1:44",
      km: "4:21",
      "1200m": null,
      mile: null,
    },
    repetition: {
      "200m": "48",
      "300m": "72",
      "400m": "96",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 45,
    easy: {
      km: "5:23-6:03",
      mile: "8:40-9:44",
    },
    marathon: {
      km: "4:57",
      mile: "7:58",
    },
    threshold: {
      "400m": "1:51",
      km: "4:38",
      mile: "7:25",
    },
    interval: {
      "400m": "1:42",
      km: "4:16",
      "1200m": null,
      mile: null,
    },
    repetition: {
      "200m": "47",
      "300m": "71",
      "400m": "94",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 46,
    easy: {
      km: "5:17-5:57",
      mile: "8:31-9:34",
    },
    marathon: {
      km: "4:51",
      mile: "7:49",
    },
    threshold: {
      "400m": "1:49",
      km: "4:33",
      mile: "7:17",
    },
    interval: {
      "400m": "1:40",
      km: "4:12",
      "1200m": "5:00",
      mile: null,
    },
    repetition: {
      "200m": "46",
      "300m": "69",
      "400m": "92",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 47,
    easy: {
      km: "5:12-5:51",
      mile: "8:22-9:25",
    },
    marathon: {
      km: "4:46",
      mile: "7:40",
    },
    threshold: {
      "400m": "1:47",
      km: "4:29",
      mile: "7:09",
    },
    interval: {
      "400m": "98",
      km: "4:07",
      "1200m": "4:54",
      mile: null,
    },
    repetition: {
      "200m": "45",
      "300m": "68",
      "400m": "90",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 48,
    easy: {
      km: "5:07-5:45",
      mile: "8:13-9:15",
    },
    marathon: {
      km: "4:41",
      mile: "7:32",
    },
    threshold: {
      "400m": "1:45",
      km: "4:24",
      mile: "7:02",
    },
    interval: {
      "400m": "96",
      km: "4:03",
      "1200m": "4:49",
      mile: null,
    },
    repetition: {
      "200m": "44",
      "300m": "67",
      "400m": "89",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 49,
    easy: {
      km: "5:01-5:40",
      mile: "8:05-9:06",
    },
    marathon: {
      km: "4:36",
      mile: "7:24",
    },
    threshold: {
      "400m": "1:43",
      km: "4:20",
      mile: "6:56",
    },
    interval: {
      "400m": "95",
      km: "3:59",
      "1200m": "4:45",
      mile: null,
    },
    repetition: {
      "200m": "44",
      "300m": "66",
      "400m": "88",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 50,
    easy: {
      km: "4:56-5:34",
      mile: "7:57-8:58",
    },
    marathon: {
      km: "4:31",
      mile: "7:17",
    },
    threshold: {
      "400m": "1:41",
      km: "4:15",
      mile: "6:50",
    },
    interval: {
      "400m": "93",
      km: "3:55",
      "1200m": "4:40",
      mile: null,
    },
    repetition: {
      "200m": "43",
      "300m": "65",
      "400m": "87",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 51,
    easy: {
      km: "4:52-5:29",
      mile: "7:49-8:49",
    },
    marathon: {
      km: "4:27",
      mile: "7:09",
    },
    threshold: {
      "400m": "1:40",
      km: "4:11",
      mile: "6:44",
    },
    interval: {
      "400m": "92",
      km: "3:51",
      "1200m": "4:36",
      mile: null,
    },
    repetition: {
      "200m": "43",
      "300m": "64",
      "400m": "86",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 52,
    easy: {
      km: "4:47-5:24",
      mile: "7:42-8:41",
    },
    marathon: {
      km: "4:22",
      mile: "7:02",
    },
    threshold: {
      "400m": "98",
      km: "4:07",
      mile: "6:38",
    },
    interval: {
      "400m": "91",
      km: "3:48",
      "1200m": "4:32",
      mile: null,
    },
    repetition: {
      "200m": "42",
      "300m": "64",
      "400m": "85",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 53,
    easy: {
      km: "4:43-5:19",
      mile: "7:35-8:33",
    },
    marathon: {
      km: "4:18",
      mile: "6:56",
    },
    threshold: {
      "400m": "97",
      km: "4:04",
      mile: "6:32",
    },
    interval: {
      "400m": "90",
      km: "3:44",
      "1200m": "4:29",
      mile: null,
    },
    repetition: {
      "200m": "42",
      "300m": "63",
      "400m": "84",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 54,
    easy: {
      km: "4:38-5:14",
      mile: "7:28-8:26",
    },
    marathon: {
      km: "4:14",
      mile: "6:49",
    },
    threshold: {
      "400m": "95",
      km: "4:00",
      mile: "6:26",
    },
    interval: {
      "400m": "88",
      km: "3:41",
      "1200m": "4:25",
      mile: null,
    },
    repetition: {
      "200m": "41",
      "300m": "62",
      "400m": "82",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 55,
    easy: {
      km: "4:34-5:10",
      mile: "7:21-8:18",
    },
    marathon: {
      km: "4:10",
      mile: "6:43",
    },
    threshold: {
      "400m": "94",
      km: "3:56",
      mile: "6:20",
    },
    interval: {
      "400m": "87",
      km: "3:37",
      "1200m": "4:21",
      mile: null,
    },
    repetition: {
      "200m": "40",
      "300m": "61",
      "400m": "81",
      "600m": null,
      "800m": null,
    },
  },
  {
    vdot: 56,
    easy: {
      km: "4:30-5:05",
      mile: "7:15-8:11",
    },
    marathon: {
      km: "4:06",
      mile: "6:37",
    },
    threshold: {
      "400m": "93",
      km: "3:53",
      mile: "6:15",
    },
    interval: {
      "400m": "86",
      km: "3:34",
      "1200m": "4:18",
      mile: null,
    },
    repetition: {
      "200m": "40",
      "300m": "60",
      "400m": "80",
      "600m": "2:00",
      "800m": null,
    },
  },
  {
    vdot: 57,
    easy: {
      km: "4:26-5:01",
      mile: "7:08-8:04",
    },
    marathon: {
      km: "4:03",
      mile: "6:31",
    },
    threshold: {
      "400m": "91",
      km: "3:50",
      mile: "6:09",
    },
    interval: {
      "400m": "85",
      km: "3:31",
      "1200m": "4:14",
      mile: null,
    },
    repetition: {
      "200m": "39",
      "300m": "59",
      "400m": "79",
      "600m": "1:57",
      "800m": null,
    },
  },
  {
    vdot: 58,
    easy: {
      km: "4:22-4:57",
      mile: "7:02-7:58",
    },
    marathon: {
      km: "3:59",
      mile: "6:25",
    },
    threshold: {
      "400m": "90",
      km: "3:46",
      mile: "6:04",
    },
    interval: {
      "400m": "83",
      km: "3:28",
      "1200m": "4:10",
      mile: null,
    },
    repetition: {
      "200m": "38",
      "300m": "58",
      "400m": "77",
      "600m": "1:55",
      "800m": null,
    },
  },
  {
    vdot: 59,
    easy: {
      km: "4:19-4:53",
      mile: "6:56-7:51",
    },
    marathon: {
      km: "3:56",
      mile: "6:19",
    },
    threshold: {
      "400m": "89",
      km: "3:43",
      mile: "5:59",
    },
    interval: {
      "400m": "82",
      km: "3:25",
      "1200m": "4:07",
      mile: null,
    },
    repetition: {
      "200m": "38",
      "300m": "57",
      "400m": "76",
      "600m": "1:54",
      "800m": null,
    },
  },
  {
    vdot: 60,
    easy: {
      km: "4:15-4:49",
      mile: "6:50-7:45",
    },
    marathon: {
      km: "3:52",
      mile: "6:14",
    },
    threshold: {
      "400m": "88",
      km: "3:40",
      mile: "5:54",
    },
    interval: {
      "400m": "81",
      km: "3:23",
      "1200m": "4:03",
      mile: null,
    },
    repetition: {
      "200m": "37",
      "300m": "56",
      "400m": "75",
      "600m": "1:52",
      "800m": null,
    },
  },
  {
    vdot: 61,
    easy: {
      km: "4:11-4:45",
      mile: "6:45-7:39",
    },
    marathon: {
      km: "3:49",
      mile: "6:09",
    },
    threshold: {
      "400m": "86",
      km: "3:37",
      mile: "5:50",
    },
    interval: {
      "400m": "80",
      km: "3:20",
      "1200m": "4:00",
      mile: null,
    },
    repetition: {
      "200m": "37",
      "300m": "55",
      "400m": "74",
      "600m": "1:51",
      "800m": null,
    },
  },
  {
    vdot: 62,
    easy: {
      km: "4:08-4:41",
      mile: "6:39-7:33",
    },
    marathon: {
      km: "3:46",
      mile: "6:04",
    },
    threshold: {
      "400m": "85",
      km: "3:34",
      mile: "5:45",
    },
    interval: {
      "400m": "79",
      km: "3:17",
      "1200m": "3:57",
      mile: null,
    },
    repetition: {
      "200m": "36",
      "300m": "54",
      "400m": "73",
      "600m": "1:49",
      "800m": null,
    },
  },
  {
    vdot: 63,
    easy: {
      km: "4:05-4:38",
      mile: "6:34-7:27",
    },
    marathon: {
      km: "3:43",
      mile: "5:59",
    },
    threshold: {
      "400m": "84",
      km: "3:32",
      mile: "5:41",
    },
    interval: {
      "400m": "78",
      km: "3:15",
      "1200m": "3:54",
      mile: null,
    },
    repetition: {
      "200m": "36",
      "300m": "53",
      "400m": "72",
      "600m": "1:48",
      "800m": null,
    },
  },
  {
    vdot: 64,
    easy: {
      km: "4:02-4:34",
      mile: "6:29-7:21",
    },
    marathon: {
      km: "3:40",
      mile: "5:54",
    },
    threshold: {
      "400m": "83",
      km: "3:29",
      mile: "5:36",
    },
    interval: {
      "400m": "77",
      km: "3:12",
      "1200m": "3:51",
      mile: null,
    },
    repetition: {
      "200m": "35",
      "300m": "52",
      "400m": "71",
      "600m": "1:46",
      "800m": null,
    },
  },
  {
    vdot: 65,
    easy: {
      km: "3:59-4:31",
      mile: "6:24-7:16",
    },
    marathon: {
      km: "3:37",
      mile: "5:49",
    },
    threshold: {
      "400m": "82",
      km: "3:26",
      mile: "5:32",
    },
    interval: {
      "400m": "76",
      km: "3:10",
      "1200m": "3:48",
      mile: null,
    },
    repetition: {
      "200m": "35",
      "300m": "52",
      "400m": "70",
      "600m": "1:45",
      "800m": null,
    },
  },
  {
    vdot: 66,
    easy: {
      km: "3:56-4:28",
      mile: "6:19-7:10",
    },
    marathon: {
      km: "3:34",
      mile: "5:45",
    },
    threshold: {
      "400m": "81",
      km: "3:24",
      mile: "5:28",
    },
    interval: {
      "400m": "75",
      km: "3:08",
      "1200m": "3:45",
      mile: "5:00",
    },
    repetition: {
      "200m": "34",
      "300m": "51",
      "400m": "69",
      "600m": "1:43",
      "800m": null,
    },
  },
  {
    vdot: 67,
    easy: {
      km: "3:53-4:24",
      mile: "6:15-7:05",
    },
    marathon: {
      km: "3:31",
      mile: "5:40",
    },
    threshold: {
      "400m": "80",
      km: "3:21",
      mile: "5:24",
    },
    interval: {
      "400m": "74",
      km: "3:05",
      "1200m": "3:42",
      mile: "4:57",
    },
    repetition: {
      "200m": "34",
      "300m": "51",
      "400m": "68",
      "600m": "1:42",
      "800m": null,
    },
  },
  {
    vdot: 68,
    easy: {
      km: "3:50-4:21",
      mile: "6:10-7:00",
    },
    marathon: {
      km: "3:29",
      mile: "5:36",
    },
    threshold: {
      "400m": "79",
      km: "3:19",
      mile: "5:20",
    },
    interval: {
      "400m": "73",
      km: "3:03",
      "1200m": "3:39",
      mile: "4:53",
    },
    repetition: {
      "200m": "33",
      "300m": "50",
      "400m": "67",
      "600m": "1:40",
      "800m": null,
    },
  },
  {
    vdot: 69,
    easy: {
      km: "3:47-4:18",
      mile: "6:06-6:55",
    },
    marathon: {
      km: "3:26",
      mile: "5:32",
    },
    threshold: {
      "400m": "78",
      km: "3:16",
      mile: "5:16",
    },
    interval: {
      "400m": "72",
      km: "3:01",
      "1200m": "3:36",
      mile: "4:50",
    },
    repetition: {
      "200m": "33",
      "300m": "49",
      "400m": "66",
      "600m": "99",
      "800m": null,
    },
  },
  {
    vdot: 70,
    easy: {
      km: "3:44-4:15",
      mile: "6:01-6:50",
    },
    marathon: {
      km: "3:24",
      mile: "5:28",
    },
    threshold: {
      "400m": "77",
      km: "3:14",
      mile: "5:13",
    },
    interval: {
      "400m": "71",
      km: "2:59",
      "1200m": "3:34",
      mile: "4:46",
    },
    repetition: {
      "200m": "32",
      "300m": "48",
      "400m": "65",
      "600m": "97",
      "800m": null,
    },
  },
  {
    vdot: 71,
    easy: {
      km: "3:42-4:12",
      mile: "5:57-6:46",
    },
    marathon: {
      km: "3:21",
      mile: "5:24",
    },
    threshold: {
      "400m": "76",
      km: "3:12",
      mile: "5:09",
    },
    interval: {
      "400m": "70",
      km: "2:57",
      "1200m": "3:31",
      mile: "4:43",
    },
    repetition: {
      "200m": "32",
      "300m": "48",
      "400m": "64",
      "600m": "96",
      "800m": null,
    },
  },
  {
    vdot: 72,
    easy: {
      km: "3:40-4:10",
      mile: "5:53-6:41",
    },
    marathon: {
      km: "3:19",
      mile: "5:20",
    },
    threshold: {
      "400m": "76",
      km: "3:10",
      mile: "5:05",
    },
    interval: {
      "400m": "69",
      km: "2:55",
      "1200m": "3:29",
      mile: "4:40",
    },
    repetition: {
      "200m": "31",
      "300m": "47",
      "400m": "63",
      "600m": "94",
      "800m": null,
    },
  },
  {
    vdot: 73,
    easy: {
      km: "3:37-4:07",
      mile: "5:49-6:37",
    },
    marathon: {
      km: "3:16",
      mile: "5:16",
    },
    threshold: {
      "400m": "75",
      km: "3:08",
      mile: "5:02",
    },
    interval: {
      "400m": "69",
      km: "2:53",
      "1200m": "3:27",
      mile: "4:37",
    },
    repetition: {
      "200m": "31",
      "300m": "47",
      "400m": "63",
      "600m": "93",
      "800m": null,
    },
  },
  {
    vdot: 74,
    easy: {
      km: "3:34-4:04",
      mile: "5:45-6:32",
    },
    marathon: {
      km: "3:14",
      mile: "5:12",
    },
    threshold: {
      "400m": "74",
      km: "3:06",
      mile: "4:59",
    },
    interval: {
      "400m": "68",
      km: "2:51",
      "1200m": "3:25",
      mile: "4:34",
    },
    repetition: {
      "200m": "31",
      "300m": "46",
      "400m": "62",
      "600m": "92",
      "800m": null,
    },
  },
  {
    vdot: 75,
    easy: {
      km: "3:32-4:01",
      mile: "5:41-6:28",
    },
    marathon: {
      km: "3:12",
      mile: "5:09",
    },
    threshold: {
      "400m": "74",
      km: "3:04",
      mile: "4:56",
    },
    interval: {
      "400m": "67",
      km: "2:49",
      "1200m": "3:22",
      mile: "4:31",
    },
    repetition: {
      "200m": "30",
      "300m": "46",
      "400m": "61",
      "600m": "91",
      "800m": null,
    },
  },
  {
    vdot: 76,
    easy: {
      km: "3:30-3:58",
      mile: "5:38-6:24",
    },
    marathon: {
      km: "3:10",
      mile: "5:05",
    },
    threshold: {
      "400m": "73",
      km: "3:02",
      mile: "4:52",
    },
    interval: {
      "400m": "66",
      km: "2:48",
      "1200m": "3:20",
      mile: "4:28",
    },
    repetition: {
      "200m": "30",
      "300m": "45",
      "400m": "60",
      "600m": "90",
      "800m": null,
    },
  },
  {
    vdot: 77,
    easy: {
      km: "3:28-3:56",
      mile: "5:34-6:20",
    },
    marathon: {
      km: "3:08",
      mile: "5:02",
    },
    threshold: {
      "400m": "72",
      km: "3:00",
      mile: "4:49",
    },
    interval: {
      "400m": "65",
      km: "2:46",
      "1200m": "3:18",
      mile: "4:25",
    },
    repetition: {
      "200m": "29",
      "300m": "45",
      "400m": "59",
      "600m": "89",
      "800m": "2:00",
    },
  },
  {
    vdot: 78,
    easy: {
      km: "3:25-3:53",
      mile: "5:30-6:16",
    },
    marathon: {
      km: "3:06",
      mile: "4:58",
    },
    threshold: {
      "400m": "71",
      km: "2:58",
      mile: "4:46",
    },
    interval: {
      "400m": "65",
      km: "2:44",
      "1200m": "3:16",
      mile: "4:23",
    },
    repetition: {
      "200m": "29",
      "300m": "44",
      "400m": "59",
      "600m": "88",
      "800m": "1:59",
    },
  },
  {
    vdot: 79,
    easy: {
      km: "3:23-3:51",
      mile: "5:27-6:12",
    },
    marathon: {
      km: "3:03",
      mile: "4:55",
    },
    threshold: {
      "400m": "70",
      km: "2:56",
      mile: "4:43",
    },
    interval: {
      "400m": "64",
      km: "2:42",
      "1200m": "3:14",
      mile: "4:20",
    },
    repetition: {
      "200m": "29",
      "300m": "44",
      "400m": "58",
      "600m": "87",
      "800m": "1:58",
    },
  },
  {
    vdot: 80,
    easy: {
      km: "3:21-3:49",
      mile: "5:24-6:08",
    },
    marathon: {
      km: "3:01",
      mile: "4:52",
    },
    threshold: {
      "400m": "70",
      km: "2:54",
      mile: "4:41",
    },
    interval: {
      "400m": "64",
      km: "2:41",
      "1200m": "3:12",
      mile: "4:17",
    },
    repetition: {
      "200m": "29",
      "300m": "43",
      "400m": "58",
      "600m": "87",
      "800m": "1:56",
    },
  },
  {
    vdot: 81,
    easy: {
      km: "3:19-3:46",
      mile: "5:20-6:04",
    },
    marathon: {
      km: "3:00",
      mile: "4:49",
    },
    threshold: {
      "400m": "69",
      km: "2:53",
      mile: "4:38",
    },
    interval: {
      "400m": "63",
      km: "2:39",
      "1200m": "3:10",
      mile: "4:15",
    },
    repetition: {
      "200m": "28",
      "300m": "43",
      "400m": "57",
      "600m": "86",
      "800m": "1:55",
    },
  },
  {
    vdot: 82,
    easy: {
      km: "3:17-3:44",
      mile: "5:17-6:01",
    },
    marathon: {
      km: "2:58",
      mile: "4:46",
    },
    threshold: {
      "400m": "68",
      km: "2:51",
      mile: "4:35",
    },
    interval: {
      "400m": "62",
      km: "2:38",
      "1200m": "3:08",
      mile: "4:12",
    },
    repetition: {
      "200m": "28",
      "300m": "42",
      "400m": "56",
      "600m": "85",
      "800m": "1:54",
    },
  },
  {
    vdot: 83,
    easy: {
      km: "3:15-3:42",
      mile: "5:14-5:57",
    },
    marathon: {
      km: "2:56",
      mile: "4:43",
    },
    threshold: {
      "400m": "68",
      km: "2:49",
      mile: "4:32",
    },
    interval: {
      "400m": "62",
      km: "2:36",
      "1200m": "3:07",
      mile: "4:10",
    },
    repetition: {
      "200m": "28",
      "300m": "42",
      "400m": "56",
      "600m": "84",
      "800m": "1:53",
    },
  },
  {
    vdot: 84,
    easy: {
      km: "3:13-3:40",
      mile: "5:11-5:54",
    },
    marathon: {
      km: "2:54",
      mile: "4:40",
    },
    threshold: {
      "400m": "67",
      km: "2:48",
      mile: "4:30",
    },
    interval: {
      "400m": "61",
      km: "2:35",
      "1200m": "3:05",
      mile: "4:08",
    },
    repetition: {
      "200m": "27",
      "300m": "41",
      "400m": "55",
      "600m": "83",
      "800m": "1:52",
    },
  },
  {
    vdot: 85,
    easy: {
      km: "3:11-3:38",
      mile: "5:08-5:50",
    },
    marathon: {
      km: "2:52",
      mile: "4:37",
    },
    threshold: {
      "400m": "66",
      km: "2:46",
      mile: "4:27",
    },
    interval: {
      "400m": "61",
      km: "2:33",
      "1200m": "3:03",
      mile: "4:05",
    },
    repetition: {
      "200m": "27",
      "300m": "41",
      "400m": "55",
      "600m": "82",
      "800m": "1:51",
    },
  },
];

export type RaceDistance =
  | "1 mi"
  | "3000 m"
  | "2 mi"
  | "5 km"
  | "10 km"
  | "15 km"
  | "half marathon"
  | "marathon";

export type TrainingEffort =
  | "easy"
  | "marathon"
  | "threshold"
  | "interval"
  | "repetitions";

export type VdotLevel = number; // Integer between 35 and 85

export type VdotInfo = {
  vdot: VdotLevel;
  raceTimes: Record<RaceDistance, number>; // seconds
  trainingPaces: Record<TrainingEffort, number | [number, number]>; // seconds per mile
};

const REGEX =
  /((?<hours>\d?\d):)?((?<minutes>\d?\d):)?(?<seconds>\d?\d)\.?(?<ds>\d)?/;

export const PACES: Record<VdotLevel, VdotInfo> = {};

const parseDuration = (s: string): any => {
  let attempt =
    /(?<minutesLow>\d?\d):(?<secondsLow>\d\d)-(?<minutesHigh>\d?\d):(?<secondsHigh>\d\d)/.exec(
      s,
    );
  if (attempt?.groups) {
    const { minutesLow, secondsLow, minutesHigh, secondsHigh } = attempt.groups;
    return [
      parseInt(minutesLow) * 60 + parseInt(secondsLow),
      parseInt(minutesHigh) * 60 + parseInt(secondsHigh),
    ];
  }

  attempt = /(?<hours>\d?\d):(?<minutes>\d\d):(?<seconds>\d\d)/.exec(s);
  if (attempt?.groups) {
    const { hours, minutes, seconds } = attempt.groups;
    return (
      parseInt(hours) * 60 * 60 + parseInt(minutes) * 60 + parseInt(seconds)
    );
  }

  attempt = /(?<minutes>\d?\d):(?<seconds>\d\d)\.?(?<ds>\d)?/.exec(s);
  if (attempt?.groups) {
    const { minutes, seconds, ds } = attempt.groups;
    return parseInt(minutes) * 60 + parseInt(seconds) + parseInt(ds ?? 0) / 10;
  }

  attempt = /(?<seconds>\d\d)/.exec(s);
  if (attempt?.groups) {
    const { seconds } = attempt.groups;
    return parseInt(seconds);
  }

  throw new Error(`could not parse ${s}`);
};

for (const d of RACE_TIMES) {
  let t = TRAINING_TIMES.find((t) => t.vdot === d.VDOT);

  if (!t) {
    throw new Error(`could not find training time for ${d.VDOT}`);
  }

  PACES[d.VDOT] = {
    vdot: d.VDOT,
    raceTimes: {
      "1 mi": parseDuration(d["Mile"]),
      "3000 m": parseDuration(d["3000m"]),
      "2 mi": parseDuration(d["2mile"]),
      "5 km": parseDuration(d["5000m"]),
      "10 km": parseDuration(d["10K"]),
      "15 km": parseDuration(d["15K"]),
      "half marathon": parseDuration(d["HalfMarathon"]),
      marathon: parseDuration(d["Marathon"]),
    },
    trainingPaces: {
      easy: parseDuration(t["easy"]["mile"]),
      marathon: parseDuration(t["marathon"]["mile"]),
      threshold: parseDuration(t["threshold"]["mile"]),
      interval: parseFloat(
        (parseDuration(t["interval"]["400m"]) * 4.02336).toFixed(1),
      ),
      repetitions: parseFloat(
        (parseDuration(t["repetition"]["200m"]) * 8.04672).toFixed(1),
      ),
    },
  };
}

const round = (seconds: number, totalDuration: number) => {
  return Math.round(seconds);
};

const leftPad = (n: number) => {
  if (n < 10) {
    return `0${n}`;
  }

  return `${n}`;
};

export const formatDuration = (
  n: number | [number, number],
  paceUnit?: PaceUnit,
): string => {
  if (Array.isArray(n)) {
    return `${formatDuration(n[0], paceUnit)} - ${formatDuration(n[1], paceUnit)}`;
  }

  const m = n * PACE_UNIT_SCALING_FACTORS[paceUnit ?? "min / mi"];

  const hours = Math.floor(m / 60 / 60);
  const minutes = Math.floor((m - hours * 60 * 60) / 60);
  const seconds = m % 60;

  if (m <= 60) {
    return `${round(seconds, m)}`;
  }

  if (m < 3600) {
    return `${minutes}:${leftPad(round(seconds, m))}`;
  }

  return `${hours}:${leftPad(minutes)}:${leftPad(round(seconds, m))}`;
};

export type PaceUnit =
  | "min / mi"
  | "min / km"
  | "min / 800m"
  | "min / 400m"
  | "min / 200m";

export const PACE_UNITS: PaceUnit[] = [
  "min / mi",
  "min / km",
  "min / 800m",
  "min / 400m",
  "min / 200m",
];

export const PACE_UNIT_SCALING_FACTORS: Record<PaceUnit, number> = {
  "min / mi": 1,
  "min / km": 0.6213711922,
  "min / 800m": 0.4970969538,
  "min / 400m": 0.2485484769,
  "min / 200m": 0.1242742384,
};

export type RaceUnit = "Total Time" | PaceUnit;

export const RACE_UNIT_TO_PACE_DIVISORS: Record<RaceDistance, number> = {
  "1 mi": 1,
  "3000 m": 1.8641135767,
  "2 mi": 2,
  "5 km": 3.1068559612,
  "10 km": 6.2137119224,
  "15 km": 9.3205678836,
  "half marathon": 13.1093787282,
  marathon: 26.2187574565,
};
