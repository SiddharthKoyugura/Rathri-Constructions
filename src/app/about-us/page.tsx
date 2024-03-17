import styles from '../page.module.css';

export default function Aboutus()
{
    return(
        <div className='flex flex-col justify-center items-center my-10'>
            <h1>Our achievements are</h1>
            <div className={styles.slider}>
                <div className={styles.slide}>
                    <h1>2000</h1>
                    <p>Ready to move in homes</p>
                </div>
                <div className={styles.slide}>Township</div>
                <div className={styles.slide}>Independent Homes</div>
                {/* <div className={styles.slide}>Roads</div>
                <div className={styles.slide}>8</div> */}
            </div> 
        </div>
        
    )
}