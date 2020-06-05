-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 20-06-05 13:09
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
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `message` tinytext NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `contact_us`
--

INSERT INTO `contact_us` (`num`, `name`, `email`, `message`, `date`) VALUES
(1, 'asdf', 'aaa@aa.com', 'asdf', '2020-04-06'),
(2, 'asdf', '', 'sdfa', '2020-04-06');

-- --------------------------------------------------------

--
-- 테이블 구조 `cover`
--

CREATE TABLE `cover` (
  `num` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `url` varchar(200) NOT NULL,
  `period` varchar(50) NOT NULL,
  `d_type` varchar(100) NOT NULL,
  `preview` varchar(200) NOT NULL,
  `d_mockup` varchar(200) NOT NULL,
  `d_bg` varchar(200) NOT NULL,
  `d_brief` varchar(200) NOT NULL,
  `d_description` text NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `cover`
--

INSERT INTO `cover` (`num`, `title`, `url`, `period`, `d_type`, `preview`, `d_mockup`, `d_bg`, `d_brief`, `d_description`, `status`) VALUES
(1, 'what to wear', '#', '2020. 4. 1 ~ 4. 28', '', '/assets/img/thum/img_prj1.jpg', '/assets/img/detail/mockup/img_mockup.png', '/assets/img/detail/back/img_back.jpg', '기획, 디자인, 구현/ HTML, CSS, JavaScript, Json, php', '<div>개별 평가를 위해 진행한 프로젝트입니다.</div><div>2020년 봄/여름에 유행할 패션을 주제로 하여 정보 전달을 목적으로 기획했습니다.</div><div>페이지 이동에 따른 혼란을 줄이기 위해 원페이지 웹사이트 형태로 제작하였으며</div><div>웹사이트 홍보 효과를 얻기 위해 댓글 이벤트를 기획했습니다.</div><div>댓글 등록 및 조회 기능은 MariaDB 데이터 서버를 이용해 구현했습니다.</div>', 'on'),
(2, 'project 2', '#', '2020. 3. 1 ~ 3. 31', '', '/assets/img/thum/img_prj2.jpg', '/assets/img/detail/mockup/img_banner.jpg', '/assets/img/detail/back/img_spot.jpg', '기획, 디자인, 구현/ HTML, CSS, JavaScript, Json, php', '22222222222222', 'on'),
(3, 'project 3', '#', '2020. 5. 1 ~ 5. 28', '', '/assets/img/thum/img-02.jpg', '/assets/img/detail/mockup/p02.jpg', '/assets/img/detail/back/mountains.png', '기획, 디자인, 구현/ HTML, CSS, JavaScript, Json, php', '3333333333333', 'on');

-- --------------------------------------------------------

--
-- 테이블 구조 `test`
--

CREATE TABLE `test` (
  `num` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `url` varchar(100) NOT NULL,
  `regDate` date NOT NULL,
  `upload` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- 테이블의 인덱스 `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`num`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 테이블의 AUTO_INCREMENT `cover`
--
ALTER TABLE `cover`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 테이블의 AUTO_INCREMENT `test`
--
ALTER TABLE `test`
  MODIFY `num` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
