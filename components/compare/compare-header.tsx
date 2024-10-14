import React from 'react';
import styles from './compare.module.scss';

interface CompareHeaderProps {
  tag: string;
  title: string;
}

const CompareHeader: React.FC<CompareHeaderProps> = ({ tag, title }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.tag}>{tag}</div>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.headerCTA}>
        <p className={styles.subtitle}>For everyone from Creator to Entrepreneurs</p>
        <button className={styles.button}>
          <svg width="20" height="20" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M4.66212 28.759H18.7027C21.5239 28.759 22.9873 27.2825 22.9873 24.4348V18.5022H20.4033V24.2766C20.4033 25.5027 19.7573 26.175 18.4785 26.175H4.87306C3.59425 26.175 2.96144 25.5027 2.96144 24.2766V4.69897C2.96144 3.4729 3.59425 2.80054 4.87306 2.80054H18.4785C19.7573 2.80054 20.4033 3.4729 20.4033 4.69897V10.4866H22.9873V4.54077C22.9873 1.7063 21.5239 0.216553 18.7027 0.216553H4.66212C1.84084 0.216553 0.377457 1.7063 0.377457 4.54077V24.4348C0.377457 27.2825 1.84084 28.759 4.66212 28.759ZM13.1524 15.6941H26.4414L28.3926 15.6018L27.4302 16.4192L25.4658 18.2649C25.2285 18.4758 25.0967 18.7791 25.0967 19.0823C25.0967 19.6755 25.5449 20.1765 26.1514 20.1765C26.4678 20.1765 26.7051 20.0447 26.9292 19.8206L31.2007 15.4041C31.5039 15.0876 31.6094 14.7976 31.6094 14.4812C31.6094 14.1648 31.5039 13.8748 31.2007 13.5583L26.9292 9.12866C26.7051 8.90454 26.4678 8.78589 26.1514 8.78589C25.5449 8.78589 25.0967 9.2605 25.0967 9.86694C25.0967 10.157 25.2285 10.4734 25.4658 10.6843L27.4302 12.5432L28.4058 13.3606L26.4414 13.2551H13.1524C12.5064 13.2551 11.9527 13.8088 11.9527 14.4812C11.9527 15.1536 12.5064 15.6941 13.1524 15.6941Z" fill="black" />
          </svg>
          Sign up for free
        </button>
      </div>
    </header>
  );
};

export default CompareHeader;

