import styles from './home.module.scss'
import {SectionOptions, SelectFilter, SectionCards} from './sections'

export const Home = () => {
    return (
        <div className={styles.home}>
           <SectionOptions />
            <main className={styles?.home__main}>
                <SelectFilter />
                <SectionCards />
            </main>
        </div>
    );
}