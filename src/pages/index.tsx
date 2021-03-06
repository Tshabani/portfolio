import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import HeaderComponet from "../components/HeaderComponet";
import HomeScreen from "./HomeScreen";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<HeaderComponet />
			<main className={styles.main}>
				<HomeScreen />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
