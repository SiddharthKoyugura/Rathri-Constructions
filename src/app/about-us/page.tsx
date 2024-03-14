import styles from '../page.module.css';

export default function Aboutus()
{
    return(
        <div className='flex flex-col justify-center items-center my-10'>
            <h1>Welcome to About-us page</h1>
            <div className={styles.slider}>
                <div className={styles.slide}>Furnitured Home</div>
                <div className={styles.slide}>Township</div>
                <div className={styles.slide}>Independent Homes</div>
                <div className={styles.slide}>Roads</div>
                <div className={styles.slide}>8</div>
            </div> 
        </div>
        
    )
}