-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 06, 2020 at 12:51 PM
-- Server version: 8.0.17
-- PHP Version: 7.2.23RC1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `secure_work_equipment`
--

-- --------------------------------------------------------

--
-- Table structure for table `airport`
--

CREATE TABLE `airport` (
  `ap_id` int(11) NOT NULL,
  `ap_name` varchar(125) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `airport`
--

INSERT INTO `airport` (`ap_id`, `ap_name`) VALUES
(1, 'สุวรรณภูมิ'),
(2, 'SecureWork');

-- --------------------------------------------------------

--
-- Table structure for table `calendar_notes`
--

CREATE TABLE `calendar_notes` (
  `cn_id` int(11) NOT NULL,
  `cn_date` date NOT NULL,
  `cn_time` time NOT NULL,
  `cn_notes` longtext NOT NULL,
  `cn_color` int(11) NOT NULL DEFAULT '0',
  `cn_head` varchar(45) NOT NULL,
  `cn_item_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `calendar_notes`
--

INSERT INTO `calendar_notes` (`cn_id`, `cn_date`, `cn_time`, `cn_notes`, `cn_color`, `cn_head`, `cn_item_id`) VALUES
(1, '2020-03-02', '09:00:00', 'บันทึกความทรงจำ', 0, 'หัวเรื่อง', 0),
(4, '2020-03-13', '12:12:00', 'บันทึกรายละเอียด', 0, '', 0),
(5, '2020-03-03', '12:22:00', 'บันทึกรายละเอียด', 0, '', 0),
(6, '2020-03-07', '12:12:00', 'บันทึกรายละเอียด', 0, '', 0),
(7, '2020-03-08', '12:12:00', 'บันทึกรายละเอียด', 0, '', 0),
(8, '2020-03-10', '12:12:00', 'บันทึกรายละเอียด', 0, '', 0),
(10, '2020-03-12', '12:12:00', 'บันทึกรายละเอียด', 0, '', 0),
(14, '2020-04-11', '22:02:00', 'บันทึกรายละเอียด', 0, '', 0),
(18, '2020-04-09', '22:02:00', 'บันทึกรายละเอียด', 0, '', 0),
(19, '2020-04-10', '11:11:00', 'บันทึกรายละเอียด', 0, '', 0),
(20, '2020-03-09', '07:59:00', 'บันทึกรายละเอียด', 0, '', 0),
(21, '2020-03-02', '20:20:00', 'Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...', 1, 'test', 0),
(22, '2020-03-05', '12:12:00', 'ลองๆดู', 0, 'test', 0),
(23, '2020-03-05', '15:58:00', 'คิดอยู่....\n', 0, 'test1', 0),
(24, '2020-03-05', '16:00:00', 'ว่าต้องทนไหว', 0, 'test2', 0),
(25, '2020-03-05', '16:06:00', 'จะโทษดิน จะโทษน้ำ', 0, 'test3', 0),
(26, '2020-03-06', '11:03:00', 'ส่งซ่อมอุปกรณ์', 1, 'PTZ10W', 9);

-- --------------------------------------------------------

--
-- Table structure for table `item_store`
--

CREATE TABLE `item_store` (
  `item_id` int(11) NOT NULL,
  `item_name` varchar(125) NOT NULL,
  `item_series_number` varchar(30) NOT NULL,
  `item_date_of_birth` date NOT NULL,
  `item_image` varchar(125) NOT NULL,
  `item_place_of_birth` varchar(45) NOT NULL,
  `item_brand` varchar(125) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `item_gen` varchar(125) NOT NULL,
  `item_status` int(45) NOT NULL,
  `item_type` int(11) NOT NULL,
  `item_airport` int(11) NOT NULL,
  `item_airport_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `item_store`
--

INSERT INTO `item_store` (`item_id`, `item_name`, `item_series_number`, `item_date_of_birth`, `item_image`, `item_place_of_birth`, `item_brand`, `item_gen`, `item_status`, `item_type`, `item_airport`, `item_airport_date`) VALUES
(4, 'camera', '444444', '2020-03-20', 'item/image/item_4.png', 'america', 'SONY', '111', 3, 1, 1, '2020-03-20'),
(6, 'RAYMARINE & FLIR THERMAL CAMERAS', '232526', '2020-03-19', 'item/image/item_6.png', 'America', 'FLIR', '001', 1, 2, 0, '2020-03-18'),
(7, 'CM-3102-11-I', '444444', '2000-04-04', 'item/image/item_7.png', '2000-04-04', '44', '44', 3, 1, 1, '2020-03-05'),
(9, 'PTZ10W', '45789512', '2020-03-27', 'item/image/item_9.png', '2020-03-18', 'FLIR', 'PT-612 HD', 1, 6, 1, '2020-03-05'),
(10, 'komet633', '112', '2020-03-10', 'item/image/item_10.png', 'Thailand', 'toyota', 'รุ่น10', 3, 1, 1, '2020-03-25'),
(11, 'ATN THOR HD THERMAL RIFLE SCOPE', '22525', '2020-03-28', 'item/image/item_11.png', 'America', 'Flir', '001', 1, 2, 1, '2020-03-09'),
(12, 'FLIR Digimerge C336ZC1', '112520', '2020-03-19', 'item/image/item_12.png', 'America', 'FLIR', '001', 2, 1, 3, '2020-03-22'),
(19, 'Medical imaging Thermography Thermographic', '11252', '2020-03-05', 'item/image/item_19.png', 'America', 'FLIR', '001', 3, 4, 1, '2020-03-08'),
(22, 'CM-3102-2', '225552', '2020-03-20', 'item/image/item_22.png', '2020-03-18', 'FLIR', 'PT-612 HD', 3, 3, 1, '2020-03-05'),
(23, 'FixCER INHOUSE', '111111', '2020-03-17', 'item/image/item_23.png', '2020-03-13', 'FLIR', '12', 2, 3, 1, '2020-03-05'),
(24, 'ATN FLIR PatrolIR Thermal', '00121', '2020-03-17', 'item/image/item_24.png', 'America', 'FLIR', '001', 3, 1, 1, '2020-03-17'),
(25, 'VLDT6M 2MP', '111112', '2020-03-11', 'item/image/item_25.png', 'America', 'FLIR', '001', 3, 2, 1, '2020-03-26'),
(26, 'Ultra Long Zoom IR Laser PTZ themal', '125220', '2020-03-11', 'item/image/item_26.png', 'America', 'FLIR', '001', 3, 1, 2, '2020-03-11');

-- --------------------------------------------------------

--
-- Table structure for table `typename`
--

CREATE TABLE `typename` (
  `TN_id` int(11) NOT NULL,
  `TN_name` varchar(45) NOT NULL,
  `TN_date_add` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `typename`
--

INSERT INTO `typename` (`TN_id`, `TN_name`) VALUES
(1, 'PTZ'),
(2, 'Fix'),
(3, 'IP PTZ Long Range Thermal Camera'),
(4, 'IP PTZ'),
(5, 'Nicon'),
(6, 'bOSS'),
(8, 'IP Fixed Camera'),
(9, 'SABATOSHI');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `airport`
--
ALTER TABLE `airport`
  ADD PRIMARY KEY (`ap_id`);

--
-- Indexes for table `calendar_notes`
--
ALTER TABLE `calendar_notes`
  ADD PRIMARY KEY (`cn_id`);

--
-- Indexes for table `item_store`
--
ALTER TABLE `item_store`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `typename`
--
ALTER TABLE `typename`
  ADD PRIMARY KEY (`TN_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `airport`
--
ALTER TABLE `airport`
  MODIFY `ap_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `calendar_notes`
--
ALTER TABLE `calendar_notes`
  MODIFY `cn_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `item_store`
--
ALTER TABLE `item_store`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `typename`
--
ALTER TABLE `typename`
  MODIFY `TN_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
