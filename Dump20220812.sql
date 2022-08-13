-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: capstone
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movieName` varchar(30) DEFAULT NULL,
  `movieStatus` tinyint(1) DEFAULT NULL,
  `info` varchar(300) DEFAULT NULL,
  `pgRating` varchar(5) DEFAULT NULL,
  `genre` varchar(30) DEFAULT NULL,
  `tralier` varchar(100) DEFAULT NULL,
  `movieLang` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Bhool Bhulaiyaa',0,'An NRI and his wife decide to stay in his ancestral home, paying no heed to the warnings about ghosts. Soon, inexplicable occurrences cause him to call a psychiatrist to help solve the mystery.','13','Horror Comedy','https://www.youtube.com/embed/ss-7iGf1xE8?autoplay=1&mute=1&controls=1&rel=0','Hindi'),(2,'Bhagam Bhag',1,'Two theatre artists vying for the lead role set out to find an actress to score winning points with the director. All hell breaks loose as they are caught in the helter-skelter of drug dealings and murder mysteries.','13','Comedy','https://www.youtube.com/embed/ihCaohTJYCo?autoplay=1&mute=1&controls=1&rel=0','Hindi'),(3,'Gangster: A Love Story',1,'Simran, who relocates to Seoul, is distraught when Daya, a gangster, re-enters her life. She has to make a choice between him and her lover Akash, who is a singer at an Indian restaurant.','13','Romance Drama','https://www.youtube.com/embed/klFhF7FyvkA?autoplay=1&mute=1&controls=1&rel=0','Hindi'),(4,'Hera Pheri',0,'Two tenants and a landlord, in desperate need of money, chance upon a ransom call via a cross connection. They hatch a plan to claim the ransom for themselves.','13','Thriller Comedy','https://www.youtube.com/embed/m1zMmVwWr-M?autoplay=1&mute=1&controls=1&rel=0','Hindi'),(5,'Phir Hera Pheri',0,'A twist of fate changes the lives of Raju, Shyam and Baburao when they get cheated by a fraudster. They must now find another way to repay the loan taken from a dreaded gangster.','13','Thriller Comedy','https://www.youtube.com/embed/m1zMmVwWr-M?autoplay=1&mute=1&controls=1&rel=0','Hindi'),(6,'Chup Chup ke',1,'A street hustler, decides to fake his own death so that his family will be able to pay off his debts with the insurance money. When two fishermen find him entangled in their nets, he pretends to be a deaf-mute so that he will not accidentally give away his true identity.','13','Comedy Drama','https://www.youtube.com/embed/qzg4rGjTH58?autoplay=1&mute=1&controls=1&rel=0','Hindi'),(7,'Jodha Akbar',0,'This love story between Akbar, the Emperor of Hindustan, and Rajput princess Jodhaa. In  empire extension, Akbar agrees to a marriage of alliance to Jodhaa but soon realizes he has to defend his choice as his courtiers displeasure at the idea of their Muslim Emperor marrying a Hindu.','13','Romantic Drama','https://www.youtube.com/embed/Ce-rrik4kT4?autoplay=1&mute=1&controls=1&rel=0','Hindi'),(8,'Jajantaram Mamantaram',0,'Indian fantasy action comedy film directed by Soumitra Ranade and produced by Arunima Roy. It is the film through which Jaaved Jaffrey came to be known in the Bollywood industry','9','Thriller Comedy','https://www.youtube.com/embed/2PUfMty9f_I?autoplay=1&mute=1&controls=1&rel=0','Hindi'),(9,'Zeher',1,'A Police Inspector is married to her subordinate, and both are employed by the Goa Police Force. They share a fairly harmonious relationship until a woman goes missing and is believed dead. To add to the mystery, there is also the question of a missing suitcase full of cash.','15','Drama','https://www.youtube.com/embed/PUxUCUll8g8?autoplay=1&mute=1&controls=1&rel=0','Hindi'),(10,'Jannat',1,'A gambler turns into a cricket bookie banking on his sixth sense for the game. But his urge to make quick money pushes him into match-fixing and he loses control of his life and love.','15','Romance Drama','https://www.youtube.com/embed/5IY4BNj0-10?autoplay=1&mute=1&controls=1&rel=0','Hindi'),(11,'Ee Nagaraniki Emaindhi',0,'The story is based on four childhood friends who go on a trip to Goa. Each have their own dream careers, and collaborate to make a short film.','13','Comedy Drama','https://www.youtube.com/embed/wERgpPK44w0?autoplay=1&mute=1&controls=1&rel=0','Telugu'),(12,'Manmadhudu',0,'Abhiram (Nagarjuna) is a manager in his own ad agency. He hates women and he feels that all women are taritors.','13','Romance Comedy','https://www.youtube.com/embed/iK-jTzpoCME?autoplay=1&mute=1&controls=1&rel=0','Telugu'),(13,'C/O Kancharapalem',1,' Four unconventional love stories set in the town and including the people of Kancharapalem.','13','Drama','https://www.youtube.com/embed/SPG3L0s5dw0?autoplay=1&mute=1&controls=1&rel=0','Telugu'),(14,'Arjun Reddy',1,'Arjun Reddy is a short tempered house surgeon gets used to drugs and drinks when his girlfriend is forced to marry another person.','18','Romance Drama','https://www.youtube.com/embed/aozErj9NqeE&t=71s?autoplay=1&mute=1&controls=1&rel=0','Telugu'),(15,'Pelli Choopulu',0,'A wannabe businesswoman and a happy-go-lucky guy meet each other during an arranged marriage blind date but eventually team up to start a food truck on their own.','13','Comedy Drama','https://www.youtube.com/embed/9v9nESxBpqU?autoplay=1&mute=1&controls=1&rel=0','Telugu'),(16,'Magadheera',0,'A warrior gets reincarnated 400 years later, after trying to save the princess and the kingdom, who also dies along with him.','13','Thriller Romance','https://www.youtube.com/embed/_LaejRruLKI?autoplay=1&mute=1&controls=1&rel=0','Telugu'),(17,'Mahanati',1,'Biography of Savitri, an actress from South India movie industry, who ruled the industry for two decades during 50s and 60s.','13','Drama','https://www.youtube.com/embed/OrnYMmWBuV4?autoplay=1&mute=1&controls=1&rel=0','Telugu'),(18,'Rangasthalam',0,'Chitti Babu begins to suspect his elder brothers life is in danger after they team up to lock horns with their village president and overthrow his unlawful 30 year old regime.','13','Thriller Drama','https://www.youtube.com/embed/sueMmTm-M4Y?autoplay=1&mute=1&controls=1&rel=0','Telugu'),(19,'Ala Vaikunthapuramlo',1,'Fate plays a vital role in connecting the life of Bantu, a son who seeks validation from his cold-hearted father.','13','Thriller Drama','https://www.youtube.com/embed/SkENAjfVoNI?autoplay=1&mute=1&controls=1&rel=0','Telugu'),(20,'Jersey',1,'A failed cricketer decides to revive his cricketing career in his late 30s despite everyone being skeptical of his ability to do so.','13','Drama Thriller Romance','https://www.youtube.com/embed/AjAe_Q1WZ_8?autoplay=1&mute=1&controls=1&rel=0','Telugu'),(21,'The Sorceror Apprentice',0,'An average guy, seen by a wizard Blake with a hidden talent for sorcery. He becomes Balthazars reluctant protege, getting a crash course in the art of magic. As Dave prepares to help his mentor defend Manhattan from adversaries, he survives the training, save the city and find his true love.','13','Drama Thriller','https://www.youtube.com/embed/v2uV0_1C4UM?autoplay=1&mute=1&controls=1&rel=0','English'),(22,'Top Gun: Maverick',1,'Maverick pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. Training a detachment of graduates for a special assignment, he must confront the ghosts of his past and his deepest fears, succeeding his mission that demands the ultimate sacrifice.','13','Drama Thriller','https://www.youtube.com/embed/giXco2jaZ_4?autoplay=1&mute=1&controls=1&rel=0','English'),(23,'Conjuring',1,'Demonologists Lorraine and Ed are summoned to the home of America. Perrons and five daughters have recently moved into a farmhouse, where a supernatural presence has made itself known. Though the manifestations are relatively benign at first, especially after the Warrens discover the house history.','18','Drama Horror','https://www.youtube.com/embed/k10ETZ41q5o?autoplay=1&mute=1&controls=1&rel=0','English'),(24,'Unfriended: Dark Web',0,'After finding a laptop, a man goes online to play a game with five of his good friends. After showing them a mysterious folder that plays disturbing videos of people who appear to be in danger, they received an anonymous messages which turns out to be a cliffhanger events in each individuals life.','18','Drama Thriller Horror','https://www.youtube.com/embed/XenTM_C9fxM&t=34s?autoplay=1&mute=1&controls=1&rel=0','English'),(25,'Stranger Things',1,'After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters. Soon, a set of teenagers who are friend of that kid, start to fight those creatures back to their world.','13','Drama Thriller Horror','https://www.youtube.com/embed/yQEondeGvKo?autoplay=1&mute=1&controls=1&rel=0','English'),(26,'Breaking Bad',0,'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his familys future. When chemistry teacher Walter White is diagnosed with Stage 3 cancer and given only two years to live, he decides he has nothing to lose.','18','Drama Thriller','https://www.youtube.com/embed/lrcqbavlbyQ?autoplay=1&mute=1&controls=1&rel=0','English'),(27,'The Flash',1,'After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel.','13','Drama Thriller','https://www.youtube.com/embed/drQWopZDEEY?autoplay=1&mute=1&controls=1&rel=0','English'),(28,'A Quiet Place',1,'The supernatural horror plot revolves around a father and a mother who struggle to survive and rear their children in a post-apocalyptic world inhabited by blind monsters with an acute sense of hearing. Surviving with the least sound is imminent.','13','Horror Thriller','https://www.youtube.com/embed/WR7cc5t7tv8?autoplay=1&mute=1&controls=1&rel=0','English'),(29,'Titanic',0,'Action romance set against the ill-fated maiden voyage of the Titanic; the pride and joy of the largest moving object ever built. She was the most luxurious liner of her era ship of dreams which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic.','13','Romance Thriller','https://www.youtube.com/embed/kVrqfYjkTdQ?autoplay=1&mute=1&controls=1&rel=0','English'),(30,'Scary Movie 6',0,'After the murder of a guy named Chad in Steveston County, Cindy and Brenda reunite with Shorty and Ray to investigate the new massacre while Cindy daughter and her own friends find themselves being terrorized by living dolls and a dancing clown.','18','Romance Comedy Horror','https://www.youtube.com/embed/ySqBroG4ZCg?autoplay=1&mute=1&controls=1&rel=0','English');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(10) DEFAULT NULL,
  `lname` varchar(10) DEFAULT NULL,
  `mobile` varchar(12) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `accType` tinyint(1) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Rajveer','Mathur','8009992328','rajveer.mathur@F.com',1,'1234567890'),(2,'Sreevishnu','Achanta','9848022338','sreevishnu@F.com',1,'1234567890');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-12 16:49:15
