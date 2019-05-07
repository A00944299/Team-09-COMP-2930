--
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
--

CREATE DATABASE IF NOT EXISTS 'trashere_db' DEFAULT
CHARACTER SET utf8 COLLATE utf8_general _ci;
USE 'trashere_db';

--
-- Building Information Table
--

DROP TABLE IF EXISTS BldngInfo;
CREATE TABLE IF NOT EXISTS BldngInfo
(buildingNo    CHAR(4)      NOT NULL
,bldngLat      DECIMAL(8,6) NOT NULL
,bldngLong     DECIMAL(9,6) NOT NULL
,PRIMARY KEY (buildingNo)
) ENGINE = INNODB;

--
-- Adding data into BldngInfo Table
--

INSERT INTO 
  BldngInfo(buildingNo, bldngLat, bldngLong)
VALUES
  ('SW01', 49.251216, -123.002808),
  ('SW02', 49.250386, -123.003513),
  ('SW03', 49.250067, -123.002653),
  ('SW05', 49.249724, -123.002617),
  ('SW09', 49.248567, -123.002857),
  ('SE01', 49.251005, -122.999052),
  ('SE02', 49.251379, -123.001241),
  ('SE04', 49.251376, -123.000236),
  ('SE06', 49.250897, -123.000582),
  ('SE08', 49.250798, -123.001501),
  ('SE09', 49.250434, -123.001310),
  ('SE12', 49.249975, -123.001612),
  ('SE14', 49.249469, -123.000890),
  ('SE16', 49.248829, -123.001043),
  ('SE19', 49.248953, -122.998629),
  ('NE01', 49.254142, -123.001032),
  ('NE02', 49.253379, -123.001605),
  ('NE03', 49.253738, -122.999892),
  ('NE04', 49.253420, -123.000546),
  ('NE06', 49.253369, -122.999820),
  ('NE07', 49.253696, -122.998661),
  ('NE08', 49.253322, -122.999241),
  ('NE09', 49.253874, -122.998546),
  ('NE10', 49.253294, -122.998525),
  ('NE12', 49.252657, -122.998525),
  ('NE16', 49.252078, -122.999718),
  ('NE18', 49.252043, -123.000700),
  ('NE20', 49.252051, -123.001575),
  ('NE21', 49.252891, -123.001686),
  ('NE22', 49.252479, -123.001731),
  ('NE23', 49.252913, -123.001138),
  ('NE24', 49.252484, -123.001142),
  ('NE25', 49.252855, -123.000421),
  ('NE28', 49.252466, -122.999908),
  ('NW01', 49.252739, -123.003299),
  ('NW03', 49.253278, -123.002657),
  ('NW05', 49.252526, -123.002272),
  ('NW06', 49.252109, -123.002422);
  

--
-- Building Trash Bin Information Table
-- 

DROP TABLE IF EXISTS BldngBinInfo;
CREATE TABLE IF NOT EXISTS BldngBinInfo 
(buildingNo     CHAR(4)    NOT NULL
,waste          TINYINT(1) NOT NULL
,recycling      TINYINT(1) NOT NULL
,refundable     TINYINT(1) NOT NULL
,paper          TINYINT(1) NOT NULL
,organic        TINYINT(1) NOT NULL
,battery        TINYINT(1) NOT NULL
,softPlastic    TINYINT(1) NOT NULL
,electronic     TINYINT(1) NOT NULL
,clothesDrop    TINYINT(1) NOT NULL
,PRIMARY KEY (buildingNo)
) ENGINE = INNODB;

--
-- Adding data into BldngBinInfo Table
--

INSERT INTO 
  BldngBinInfo(buildingNo, waste, recycling, refundable, 
  paper, organic, battery, softPlastic, electronic, clothesDrop)
VALUES
  ('NW03', 1, 1, 0, 1, 1, 0, 0, 0, 0),
  ('NW05', 1, 1, 0, 1, 1, 0, 0, 0, 0),
  ('NW06', 1, 0, 1, 1, 0, 0, 0, 0, 0),
  ('SE01', 1, 1, 1, 1, 1, 0, 0, 0, 0),
  ('SE02', 1, 1, 1, 1, 1, 0, 0, 1, 1),
  ('SE04', 1, 1, 1, 1, 1, 0, 0, 0, 0),
  ('SE06', 1, 1, 1, 1, 1, 1, 1, 0, 0),
  ('SE09', 1, 0, 0, 0, 0, 0, 0, 0, 0),
  ('SE10', 1, 1, 1, 1, 1, 1, 0, 0, 0),
  ('SE12', 1, 1, 1, 1, 1, 0, 0, 0, 0),
  ('SE14', 1, 1, 1, 1, 1, 1, 0, 0, 0),
  ('SE16', 1, 1, 1, 1, 1, 1, 0, 0, 0),
  ('SW01', ),
  ('SW02', ),
  ('SW03', ),
  ('SW05', ),
  ('SW09', ),
  ('NE01', ),
  ('NE02', ),
  ('NE03', ),
  ('NE04', ),
  ('NE06', ),
  ('NE07', ),
  ('NE08', ),
  ('NE09', ),
  ('NE10', ),
  ('NE12', ),
  ('NE16', ),
  ('NE18', ),
  ('NE20', ),
  ('NE21', ),
  ('NE22', ),
  ('NE23', ),
  ('NE24', ),
  ('NE25', ),
  ('NE28', );
  
  
  
  
  
  
  