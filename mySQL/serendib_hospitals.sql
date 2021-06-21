-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2020 at 03:16 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `serendib_hospitals`
--

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `Consultant_id` varchar(50) NOT NULL,
  `Schedule_id` varchar(50) NOT NULL,
  `Day_of_app` varchar(50) DEFAULT NULL,
  `Date_of_app` varchar(50) DEFAULT NULL,
  `Start_time` varchar(10) DEFAULT NULL,
  `End_time` varchar(10) DEFAULT NULL,
  `No_of_appointments` varchar(15) DEFAULT NULL,
  `Room_no` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`Consultant_id`, `Schedule_id`, `Day_of_app`, `Date_of_app`, `Start_time`, `End_time`, `No_of_appointments`, `Room_no`) VALUES
('a0075', 'a0001', 'Monday', '02/04/2019', '10.30am', '12.30pm', '11', 'E15'),
('a0075', 'a0002', 'Tuesday', '03/04/2019', '10.30am', '12.30pm', '27', 'E15'),
('a0075', 'a0003', 'Thursday', '05/04/2019', '12.30pm', '2.30pm', '05', 'E15'),
('a0075', 'a0004', 'Saturday', '07/04/2019', '12.30pm', '2.30pm', '09', 'E15');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
