-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 02, 2018 at 03:47 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `survey`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(10) NOT NULL,
  `company_name` varchar(500) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_name`, `address`, `created_at`, `updated_at`) VALUES
(15, 'Jayesh Enterprises', 'Ahmedabad', '2018-09-27 07:14:22', '2018-09-27 11:48:52');

-- --------------------------------------------------------

--
-- Table structure for table `company_survey`
--

CREATE TABLE `company_survey` (
  `survey_id` int(11) NOT NULL,
  `company_id` int(5) NOT NULL,
  `form_id` int(10) NOT NULL,
  `survey_name` varchar(200) NOT NULL,
  `start_dt` date NOT NULL,
  `end_dt` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company_survey`
--

INSERT INTO `company_survey` (`survey_id`, `company_id`, `form_id`, `survey_name`, `start_dt`, `end_dt`, `created_at`, `updated_at`) VALUES
(1, 15, 5, 'Customer Satisfaction Survey', '2018-09-19', '2018-09-23', '2018-10-01 07:58:20', '2018-10-01 11:55:55'),
(2, 15, 4, 'Dhaval', '2018-09-11', '2018-09-11', '2018-10-01 07:59:46', '2018-10-01 11:02:38'),
(3, 15, 6, 'Employee Satisfaction Survey', '2018-10-10', '2018-10-23', '2018-10-10 05:20:20', '2018-10-18 13:09:45'),
(4, 15, 6, 'NAGAR', '2018-11-07', '2018-11-21', '2018-11-02 14:39:58', '2018-11-02 14:39:58');

-- --------------------------------------------------------

--
-- Table structure for table `forms`
--

CREATE TABLE `forms` (
  `form_id` int(10) NOT NULL,
  `form_name` varchar(50) NOT NULL,
  `form_description` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `forms`
--

INSERT INTO `forms` (`form_id`, `form_name`, `form_description`, `created_at`, `updated_at`) VALUES
(6, 'Gaurav Pvt. ltd.', 'regional', '2018-10-03 11:05:56', '2018-10-03 11:05:56'),
(7, 'Survey 1', 'dfdsf', '2018-10-03 11:32:33', '2018-10-03 11:32:33');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2018_09_21_045628_create_survey_table', 1),
(2, '2018_09_21_072603_create_surveys_table', 2),
(3, '2014_10_12_000000_create_users_table', 3),
(4, '2014_10_12_100000_create_password_resets_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

CREATE TABLE `options` (
  `form_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `option_id` int(11) NOT NULL,
  `option_description` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `options`
--

INSERT INTO `options` (`form_id`, `question_id`, `option_id`, `option_description`, `created_at`, `updated_at`) VALUES
(6, 9, 17, 'Superior', '2018-10-03 12:29:40', '2018-10-03 12:29:40'),
(6, 9, 18, 'Very Satisfactory', '2018-10-03 12:29:50', '2018-10-03 12:29:50'),
(6, 9, 19, 'About Average', '2018-10-03 12:30:33', '2018-10-03 12:30:33'),
(6, 9, 20, 'Somewhat Unsatisfactory', '2018-10-03 12:30:39', '2018-10-03 12:30:39'),
(6, 9, 21, 'Very Poor', '2018-10-03 12:30:46', '2018-10-03 12:30:46'),
(6, 10, 31, 'option 1', '2018-10-04 13:08:47', '2018-10-04 13:08:47'),
(6, 10, 32, 'option 2', '2018-10-04 13:08:47', '2018-10-04 13:08:47'),
(6, 10, 33, 'option 3', '2018-10-04 13:08:48', '2018-10-04 13:08:48'),
(6, 11, 35, 'option 1', '2018-10-10 04:22:00', '2018-10-10 04:22:00'),
(6, 11, 36, 'option 23', '2018-10-10 04:22:00', '2018-10-10 04:22:41'),
(6, 11, 37, 'option 3', '2018-10-10 04:22:00', '2018-10-10 04:22:00'),
(6, 11, 39, 'option 4', '2018-10-10 04:22:32', '2018-10-10 04:22:32'),
(6, 14, 40, 'Pizza', '2018-10-18 12:43:07', '2018-10-18 12:43:07'),
(6, 14, 41, 'Pasta', '2018-10-18 12:43:07', '2018-10-18 12:43:07'),
(6, 14, 42, 'Salad', '2018-10-18 12:43:07', '2018-10-18 12:43:07'),
(6, 14, 43, 'Steak', '2018-10-18 12:43:08', '2018-10-18 12:43:08'),
(6, 14, 44, 'Soup', '2018-10-18 12:43:08', '2018-10-18 12:43:08'),
(6, 14, 45, 'Other', '2018-10-18 12:43:08', '2018-10-18 12:56:10'),
(6, 15, 46, '$0-10k', '2018-10-18 12:57:58', '2018-10-18 12:57:58'),
(6, 15, 47, '$10-35k', '2018-10-18 12:57:58', '2018-10-18 12:57:58'),
(6, 15, 48, '$35-60k', '2018-10-18 12:57:58', '2018-10-18 12:57:58'),
(6, 15, 49, '$60k+', '2018-10-18 12:57:59', '2018-10-18 12:57:59'),
(6, 16, 50, 'Customer Service', '2018-10-22 13:46:32', '2018-10-22 13:46:32'),
(6, 16, 51, 'Finance/Accounting', '2018-10-22 13:46:33', '2018-10-22 13:46:33'),
(6, 16, 52, 'MIS  Sales/Marketing', '2018-10-22 13:46:33', '2018-10-22 13:46:33'),
(6, 16, 53, 'Corporate Marketing', '2018-10-22 13:46:33', '2018-10-22 13:46:33'),
(6, 16, 54, 'Human Resources', '2018-10-22 13:46:33', '2018-10-22 13:46:33'),
(7, 18, 55, 'dasdas', '2018-11-02 14:36:04', '2018-11-02 14:36:04'),
(7, 18, 56, 'dasd', '2018-11-02 14:36:04', '2018-11-02 14:36:04'),
(7, 18, 57, 'dasd', '2018-11-02 14:36:04', '2018-11-02 14:36:04'),
(7, 18, 58, 'adas', '2018-11-02 14:36:04', '2018-11-02 14:36:04');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('ups12384@gmail.com', '$2y$10$lOU1.KDeWoFs47wSpK8ZDed9LAjjz1cgZ/i/93BlW5MmNKd25tuGK', '2018-09-22 05:32:44');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `form_id` int(10) NOT NULL,
  `question_id` int(10) NOT NULL,
  `question_description` varchar(500) NOT NULL,
  `question_type` varchar(10) NOT NULL DEFAULT 'multiple',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`form_id`, `question_id`, `question_description`, `question_type`, `created_at`, `updated_at`) VALUES
(6, 9, 'In thinking about your most recent experience with [COMPANY], how was the quality of customer service you received?', 'MCQ', '2018-10-03 12:19:28', '2018-10-03 12:27:48'),
(6, 10, 'The process for getting your concerns resolved was:', 'MCQ', '2018-10-03 12:38:55', '2018-10-04 14:00:32'),
(6, 11, 'Now please think about the features and benefits of the [PRODUCT] itself. How satisfied are you with the [PRODUCT]:', 'MCQ', '2018-10-05 11:24:21', '2018-10-05 11:24:21'),
(6, 13, 'Give your feedback.', 'OE', '2018-10-10 04:31:57', '2018-10-10 04:31:57'),
(6, 14, 'What\'s your favorite food?', 'MCQ', '2018-10-18 12:42:11', '2018-10-18 12:42:11'),
(6, 15, 'What\'s your household income?', 'MCQ', '2018-10-18 12:57:13', '2018-10-18 12:57:13'),
(6, 16, 'Which of the following best describes the department you work in?', 'MCQ', '2018-10-22 13:45:26', '2018-10-22 13:45:26'),
(6, 17, 'sfsdd', 'MCQ', '2018-11-02 14:32:01', '2018-11-02 14:32:01'),
(7, 18, 'sdfsdf', 'MCQ', '2018-11-02 14:35:53', '2018-11-02 14:35:53');

-- --------------------------------------------------------

--
-- Table structure for table `survey`
--

CREATE TABLE `survey` (
  `survey_id` int(5) NOT NULL,
  `company_id` int(11) NOT NULL,
  `survey_type` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `survey_option`
--

CREATE TABLE `survey_option` (
  `question_id` int(11) NOT NULL,
  `option_id` int(5) NOT NULL,
  `description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `survey_option`
--

INSERT INTO `survey_option` (`question_id`, `option_id`, `description`) VALUES
(1, 1, 'Superior'),
(1, 2, 'Very Satisfactory '),
(1, 3, '  \r\nAbout Average'),
(1, 4, 'Somewhat Unsatisfactory'),
(1, 5, 'Very Poor'),
(2, 1, 'Very Unsatisfactory '),
(2, 2, 'Somewhat Unsatisfactory '),
(2, 3, 'About Average '),
(2, 4, 'Somewhat Satisfactory '),
(2, 5, '  \r\nVery Satisfactory'),
(3, 1, 'Very Unsatisfactory'),
(3, 2, 'Somewhat Unsatisfactory'),
(3, 3, 'About Average'),
(3, 4, 'Somewhat Satisfactory'),
(3, 5, ' \r\nVery Satisfactory');

-- --------------------------------------------------------

--
-- Table structure for table `survey_question`
--

CREATE TABLE `survey_question` (
  `form_id` int(10) NOT NULL,
  `id` int(5) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `type` varchar(10) NOT NULL DEFAULT 'multiple'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `survey_question`
--

INSERT INTO `survey_question` (`form_id`, `id`, `description`, `type`) VALUES
(0, 1, '\r\n  \r\n \r\nIn thinking about your most recent experience with [COMPANY], how was the quality of customer service you received?', 'multiple'),
(0, 2, 'The process for getting your concerns resolved was: ', 'multiple'),
(0, 3, 'Now please think about the features and benefits of the [PRODUCT] itself. How satisfied are you with the [PRODUCT]:', 'multiple');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `company_id` int(11) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'respondent',
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `company_id`, `name`, `user_type`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 15, 'Jayesh Ingle', 'respondent', 'abc@gmail.com', '$2y$10$1V4yOkrQbwAN2bUm6hAInOMYfTApHORNRW135ZE1ldtn9a7eYaUb.', NULL, '2018-09-22 06:12:56', '2018-09-22 06:12:56'),
(3, 15, 'Dhaval Patel', 'respondent', 'dhaval@gmail.com', '$2y$10$GjhjabwUiIi.vbTCoX8ZXu2KaWk/LxSLWvoQHdxCrYxKGClMafE4S', NULL, '2018-10-01 06:10:06', '2018-10-01 06:10:06'),
(4, NULL, 'Admin', 'admin', 'survey@gmail.com', '$2y$10$NsM4I1ELRg.qY7IdWV5sxOWETR9PCbH4K87f2fWXF2Lzd/.RflfF2', NULL, '2018-10-15 00:16:00', '2018-10-15 00:16:00'),
(5, 15, 'Gaurav', 'respondent', 'gaurav@gmail.com', '$2y$10$1WM41vlsB8504jsEmRWm6ut6vTcpBRIXIzW0ZXC/25Xpp9yXzpFam', NULL, '2018-10-18 07:47:05', '2018-10-18 07:47:05'),
(16, 15, 'ups1', 'respondent', 'abc1@gmail.com', '$2y$10$82nWwxu9JLEzQyOpGrSAn.CeqXfxu18KwMC1DRbqOmoBoMAasfmfi', NULL, NULL, NULL),
(17, 15, 'ups2', 'respondent', 'abc2@gmail.com', '$2y$10$N3xWiBDF0JXFul0E6VPaqOtUjXxN1n0GdgJ1tLssq14w.HOZbnfVO', NULL, NULL, NULL),
(18, 15, 'ups3', 'respondent', 'abc3@gmail.com', '$2y$10$by4K7jrzxAXWNltjVjctU.pww.8FVFw62J3KYzh9lWhqwcyKGvCGW', NULL, NULL, NULL),
(19, 15, 'ups4', 'respondent', 'abc4@gmail.com', '$2y$10$Cr8Om3cpTToZe.GscVSxBuX1URubk7rjuACqKJ3nmJFt6S4OqhDce', NULL, NULL, NULL),
(20, 15, 'ups5', 'respondent', 'abc5@gmail.com', '$2y$10$mnDO.BSw4AjxxiPLWgp56.myHnPoqThxWdiFlNJb6Qnclpjh.9GUq', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_survey`
--

CREATE TABLE `user_survey` (
  `user_id` varchar(100) NOT NULL,
  `survey_id` int(11) NOT NULL,
  `form_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `answer_id` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_survey`
--

INSERT INTO `user_survey` (`user_id`, `survey_id`, `form_id`, `question_id`, `answer_id`, `created_at`, `updated_at`) VALUES
('abc1@gmail.com', 3, 6, 15, '47', '2018-10-27 07:59:35', '2018-10-27 07:59:35'),
('abc1@gmail.com', 3, 6, 16, '51', '2018-10-27 07:59:36', '2018-10-27 07:59:36'),
('abc2@gmail.com', 3, 6, 9, '17', '2018-10-27 08:08:26', '2018-10-27 08:08:26'),
('abc2@gmail.com', 3, 6, 10, '32', '2018-10-27 08:08:26', '2018-10-27 08:08:26'),
('abc2@gmail.com', 3, 6, 11, '36', '2018-10-27 08:08:26', '2018-10-27 08:08:26'),
('abc2@gmail.com', 3, 6, 13, 'dfsf', '2018-10-27 08:08:26', '2018-10-27 08:08:26'),
('abc2@gmail.com', 3, 6, 14, '42', '2018-10-27 08:08:27', '2018-10-27 08:08:27'),
('abc2@gmail.com', 3, 6, 15, '48', '2018-10-27 08:08:27', '2018-10-27 08:08:27'),
('abc2@gmail.com', 3, 6, 16, '52', '2018-10-27 08:08:27', '2018-10-27 08:08:27'),
('dhaval@gmail.com', 3, 6, 9, '18', '2018-11-02 14:43:51', '2018-11-02 14:43:51'),
('dhaval@gmail.com', 3, 6, 10, '32', '2018-11-02 14:43:51', '2018-11-02 14:43:51'),
('dhaval@gmail.com', 3, 6, 11, '36', '2018-11-02 14:43:51', '2018-11-02 14:43:51'),
('dhaval@gmail.com', 3, 6, 13, 'sfdsdf', '2018-11-02 14:43:51', '2018-11-02 14:43:51'),
('dhaval@gmail.com', 3, 6, 14, '42', '2018-11-02 14:43:52', '2018-11-02 14:43:52'),
('dhaval@gmail.com', 3, 6, 15, '48', '2018-11-02 14:43:52', '2018-11-02 14:43:52'),
('dhaval@gmail.com', 3, 6, 16, '51', '2018-11-02 14:43:52', '2018-11-02 14:43:52'),
('dhaval@gmail.com', 3, 6, 17, '0', '2018-11-02 14:43:52', '2018-11-02 14:43:52');

-- --------------------------------------------------------

--
-- Table structure for table `user_survey_link`
--

CREATE TABLE `user_survey_link` (
  `company_id` int(11) NOT NULL,
  `user_id` varchar(200) NOT NULL,
  `survey_id` int(11) NOT NULL,
  `status` varchar(200) NOT NULL DEFAULT 'open',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_survey_link`
--

INSERT INTO `user_survey_link` (`company_id`, `user_id`, `survey_id`, `status`, `created_at`, `updated_at`) VALUES
(15, 'abc5@gmail.com', 3, 'open', '2018-10-27 07:58:45', '2018-10-27 07:58:45'),
(15, 'abc@gmail.com', 1, 'open', '2018-11-02 14:41:04', '2018-11-02 14:41:04'),
(15, 'dhaval@gmail.com', 3, 'open', '2018-10-11 08:29:07', '2018-10-11 10:21:53'),
(15, 'gaurav@gmail.com', 3, 'open', '2018-10-18 13:20:03', '2018-10-18 13:20:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `company_survey`
--
ALTER TABLE `company_survey`
  ADD PRIMARY KEY (`survey_id`);

--
-- Indexes for table `forms`
--
ALTER TABLE `forms`
  ADD PRIMARY KEY (`form_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `options`
--
ALTER TABLE `options`
  ADD UNIQUE KEY `option_id` (`option_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD UNIQUE KEY `question_id` (`question_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_survey`
--
ALTER TABLE `user_survey`
  ADD PRIMARY KEY (`user_id`,`survey_id`,`form_id`,`question_id`);

--
-- Indexes for table `user_survey_link`
--
ALTER TABLE `user_survey_link`
  ADD PRIMARY KEY (`company_id`,`user_id`,`survey_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `company_survey`
--
ALTER TABLE `company_survey`
  MODIFY `survey_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `forms`
--
ALTER TABLE `forms`
  MODIFY `form_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `options`
--
ALTER TABLE `options`
  MODIFY `option_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `question_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
