-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 20-05-14 11:41
-- 서버 버전: 10.3.15-MariaDB
-- PHP 버전: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `chaemilee9012`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `contact_us`
--

CREATE TABLE `contact_us` (
  `num` int(11) NOT NULL,
  `writer` varchar(50) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `content` tinytext NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `contact_us`
--

INSERT INTO `contact_us` (`num`, `writer`, `subject`, `email`, `content`, `date`) VALUES
(1, 'aaa', 'aaa', 'aaa@aaa.aa', 'aaaaaaaaaaaaa', '2020-05-13'),
(2, 'aaa', 'aaa', 'aaa@aaa.aa', 'aaaaaaaaaaaaa', '2020-05-13'),
(8, 'asdfasdf', 'afdsaf', 'aaa@aaa.aa', 'aaaaaaaaaaa', '2020-05-13'),
(9, 'asdfasdf', 'afdsaf', 'aaa@aaa.aa', 'aaaaaaaaaaa', '2020-05-13'),
(10, 'asdfasdf', 'afdsaf', 'aaa@aaa.aa', 'aaaaaaaaaaa', '2020-05-13'),
(11, 'asdfasdf', 'afdsaf', 'aaa@aaa.aa', 'aaaaaaaaaaa', '2020-05-13'),
(12, 'asdfasdf', 'afdsaf', 'aaa@aaa.aa', 'aaaaaaaaaaa', '2020-05-13'),
(13, 'asdfasdf', 'afdsaf', 'aaa@aaa.aa', 'aaaaaaaaaaa', '2020-05-13'),
(14, 'asdfasdf', 'afdsaf', 'aaa@aaa.aa', 'aaaaaaaaaaa', '2020-05-13'),
(15, 'asdfasdf', 'afdsaf', 'aaa@aaa.aa', 'aaaaaaaaaaa', '2020-05-13'),
(16, 'asdfasdf', 'afdsaf', 'aaa@aaa.aa', 'aaaaaaaaaaa', '2020-05-13'),
(17, 'asdfasdf', 'afdsaf', 'aaa@aaa.aa', 'aaaaaaaaaaa', '2020-05-13'),
(18, 'asdfasdf', 'afdsaf', 'aaa@aaa.aa', 'aaaaaaaaaaa', '2020-05-13'),
(19, 'asdfasdf', 'afdsaf', 'aaa@aaa.aa', 'aaaaaaaaaaa', '2020-05-13'),
(20, 'asdfasdf', 'afdsaf', 'aaa@aaa.aa', 'aaaaaaaaaaa', '2020-05-13'),
(21, 'asdfasdf', 'afdsaf', 'aaa@aaa.aa', 'aaaaaaaaaaa', '2020-05-13'),
(22, 'asdfasdf', 'afdsaf', 'aaa@aaa.aa', 'aaaaaaaaaaa', '2020-05-13'),
(23, 'asdfasdf', 'afdsaf', 'aaa@aaa.aa', 'aaaaaaaaaaa', '2020-05-13'),
(24, 'ddd', 'ddd', 'ddd@ddd.dd', 'ddd', '2020-05-13'),
(25, 'ddd', 'ddd', 'ddd@ddd.dd', 'ddd', '2020-05-13'),
(26, 'ddd', 'ddd', 'ddd@ddd.dd', 'ddd', '2020-05-13'),
(27, 'ddd', 'ddd', 'ddd@ddd.dd', 'ddd', '2020-05-13'),
(28, 'ddd', 'ddd', 'ddd@ddd.dd', 'ddd', '2020-05-13'),
(29, 'ddd', 'ddd', 'ddd@ddd.dd', 'ddd', '2020-05-13'),
(30, 'ddd', 'ddd', 'ddd@ddd.dd', 'ddd', '2020-05-13'),
(31, 'ddd', 'ddd', 'ddd@ddd.dd', 'ddd', '2020-05-13'),
(32, 'ddd', 'ddd', 'ddd@ddd.dd', 'ddd', '2020-05-13'),
(33, 'ddd', 'ddd', 'ddd@ddd.dd', 'ddd', '2020-05-13'),
(34, 'ddd', 'ddd', 'ddd@ddd.dd', 'ddd', '2020-05-13'),
(35, 'ddd', 'ddd', 'ddd@ddd.dd', 'ddd', '2020-05-13'),
(36, 'ddd', 'ddd', 'ddd@ddd.dd', 'ddd', '2020-05-13'),
(37, 'ddd', 'ddd', 'ddd@ddd.dd', 'ddd', '2020-05-13'),
(38, 'ddd', 'ddd', 'ddd@ddd.dd', 'ddd', '2020-05-13');

-- --------------------------------------------------------

--
-- 테이블 구조 `cover`
--

CREATE TABLE `cover` (
  `num` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `url` varchar(200) NOT NULL,
  `reg_date` varchar(50) NOT NULL,
  `upload` varchar(200) NOT NULL,
  `description` text NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `cover`
--

INSERT INTO `cover` (`num`, `title`, `url`, `reg_date`, `upload`, `description`, `status`) VALUES
(10, 'asf', 'asdf', '2020-05-13', '/project2/admin/upload/thum/img_barbie_01.png', 'asdf', 'on'),
(12, '', '', '', '/project2/admin/upload/thum/', '<br>', 'on'),
(16, '222222', '2222222', '2020-05-15', '/project2/admin/upload/thum/img_barbie_13.png', 'aaaaaa', 'on');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`num`);

--
-- 테이블의 인덱스 `cover`
--
ALTER TABLE `cover`
  ADD PRIMARY KEY (`num`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- 테이블의 AUTO_INCREMENT `cover`
--
ALTER TABLE `cover`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
