import styles from './SelectorGroup.module.css';

interface SelectorGroup extends React.HTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode;
}

const SelectorGroup = ({ icon, children, ...rest }: SelectorGroup) => {
  return (
    <div className={styles.container}>
      {icon && <span className={styles.icone}>{icon}</span>}
      <select className={styles.selector} {...rest}>
        {children}
      </select>
    </div>
  );
};

export default SelectorGroup;
