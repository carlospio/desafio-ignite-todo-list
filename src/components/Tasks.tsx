import { ChangeEvent, useState } from 'react';
import { Check, Trash } from '@phosphor-icons/react';
import styles from './Tasks.module.css';


interface TaskProps {
    id: number;
    content: string;
    checked: boolean;
    onDelete: (id: number) => void;
    onCheck: (id: number, checked: boolean) => void;
}

export function Tasks({ id, content, checked, onDelete, onCheck }: TaskProps){

    const [isChecked, setIsChecked] = useState(checked);

    function handleCheckChange(event: ChangeEvent<HTMLInputElement>){
        const inputCheckboxPrevChecked = event.target.checked;
        setIsChecked(inputCheckboxPrevChecked);
        onCheck(id, inputCheckboxPrevChecked);
    }
    
    function handleDeleteClick(){
        onDelete(id);
    }


    return (
        <div className={`${styles.task} ${isChecked ? `${styles.checked}` : '' }`}>
            <label className={`${styles.checkboxLabel} ${isChecked ? `${styles.checkboxLabelChecked}` : '' }`}>
                {isChecked && (
                    <Check size={10} fill='#fff' weight="bold" />
                )}
                <input type="checkbox" checked={isChecked} onChange={handleCheckChange} />
            </label>
            <span>{content}</span>
            <button className={styles.deleteTask} onClick={handleDeleteClick}>
                <Trash width={16} height={16} weight='bold' />
            </button>
        </div>
    )
}