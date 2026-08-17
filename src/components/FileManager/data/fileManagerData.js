// fileManagerData.js


import FolderMusic from "../../../assets/images/FolderMusic.png";
import FolderImage from "../../../assets/images/FolderImage.png";

import FolderDesign from "../../../assets/images/FolderDesign.png";
import FolderDocument from "../../../assets/images/FolderDocument.png";
import FolderDownld from "../../../assets/images/FolderDownld.png";

import FigmaOne from "../../../assets/images/FigmaOne.png";
import DymondOne from "../../../assets/images/DymondOne.png";
import DOCWorld from "../../../assets/images/DOCWorld.png";
import ZIPFile from "../../../assets/images/ZIPFile.png";
import PSDFiles from "../../../assets/images/PSDFiles.png";
import PDFLast from "../../../assets/images/PDFLast.png";

export const fileManagerData = {

  storage: {
    used: 70,
    total: "10 GB",
    available: "3 GB",
  },
foldersTree: [
  {
    id: 1,
    name: "Design",
    expanded: false,
    children: [
      {
        id: 11,
        name: "UI Design",
        expanded: false,
        children: [
          {
            id: 111,
            name: "Figma",
            expanded: false,
            children: [],
          },
          {
            id: 112,
            name: "Adobe XD",
            expanded: false,
            children: [],
          },
        ],
      },
      {
        id: 12,
        name: "Logos",
        expanded: false,
        children: [],
      },
    ],
  },

  {
    id: 2,
    name: "Projects",
    expanded: true,
    children: [
      {
        id: 21,
        name: "Projects_01",
        expanded: false,
        children: [],
      },
      {
        id: 22,
        name: "Projects_02",
        expanded: false,
        children: [],
      },
      {
        id: 23,
        name: "Projects_03",
        expanded: false,
        children: [],
      },
      {
        id: 24,
        name: "Projects_04",
        expanded: false,
        children: [],
      },
    ],
  },

  {
    id: 3,
    name: "Music",
    expanded: false,
    children: [
      {
        id: 31,
        name: "Tamil",
        expanded: false,
        children: [],
      },
      {
        id: 32,
        name: "English",
        expanded: false,
        children: [],
      },
    ],
  },

  {
    id: 4,
    name: "Pictures",
    expanded: false,
    children: [
      {
        id: 58,
        name: "Doc",
        expanded: false,
        children: [],
      },
      {
        id: 59,
        name: "Images",
        expanded: false,
        children: [],
      },
    ],
  },

  {
    id: 5,
    name: "Documents",
    expanded: false,
    children: [
      {
        id: 51,
        name: "Resume",
        expanded: false,
        children: [],
      },
      {
        id: 52,
        name: "Certificates",
        expanded: false,
        children: [],
      },
    ],
  },

  {
    id: 6,
    name: "Downloads",
    expanded: false,
     children: [
      {
        id: 61,
        name: "Downloads",
        expanded: false,
        children: [],
      },
      {
        id: 60,
        name: "Documents",
        expanded: false,
        children: [],
      },
    ],
  },
],
  folders: [

    {
      id: 1,
      name: "Design",
      size: "5.8 GB",
      icon: FolderDesign,
      selected: false,
    },

    {
      id: 2,
      name: "Projects",
      size: "3.2 GB",
      icon: FolderDesign,
      selected: true,
    },

    {
      id: 3,
      name: "Music",
      size: "1.5 GB",
      icon: FolderMusic,
      selected: false,
    },

    {
      id: 4,
      name: "Pictures",
      size: "1.7 GB",
      icon: FolderImage,
      selected: false,
    },

    {
      id: 5,
      name: "Documents",
      size: "440 MB",
      icon: FolderDocument,
      selected: false,
    },

    {
      id: 6,
      name: "Downloads",
      size: "10.1 GB",
      icon: FolderDownld,
      selected: false,
    },

  ],

  files: [

    {
      id: 1,
      name: "Rocket - Admin.fig",
      size: "1.8 MB",
      icon: FigmaOne,
      type: "figma",
    },

    {
      id: 2,
      name: "Rocket - Admin.sketch",
      size: "15 MB",
      icon: DymondOne,
      type: "sketch",
    },

    {
      id: 3,
      name: "Arion - Admin.sketch",
      size: "12 MB",
      icon: DymondOne,
      type: "sketch",
    },

    {
      id: 4,
      name: "Project Brief.docx",
      size: "1.4 MB",
      icon:DOCWorld,
      type: "word",
    },

    {
      id: 5,
      name: "Design.psd",
      size: "1.9 GB",
      icon: ZIPFile ,
      type: "psd",
    },

    {
      id: 6,
      name: "Resume.vcf",
      size: "2.5 MB",
      icon:PSDFiles ,
      type: "vcf",
    },

    {
      id: 7,
      name: "Project Brief.docx",
      size: "1.2 MB",
      icon: DOCWorld,
      type: "word",
    },

    {
      id: 8,
      name: "Brand Style Guide.pdf",
      size: "4.5 MB",
      icon: PDFLast,
      type: "pdf",
    },

  ],

  selectedFolder: {

    id: 2,

    name: "Projects",

    icon: FolderDesign,

    info: {

      type: "Folder",

      size: "3.2 GB",

      owner: "ArtTemplate",

      location: "My Files",

      modified: "Sep 17, 2020 4:25",

      created: "Sep 10, 2020 2:25",

    },

    settings: {

      fileSharing: true,

      backup: false,

      sync: false,

    },

  },

};