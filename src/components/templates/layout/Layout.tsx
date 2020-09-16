import React from "react";

import styles from './styles.module.scss'

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return <main className={styles.container} >{children}</main>;
}

export default Layout;
