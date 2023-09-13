import { createContext, useState, useContext } from "react";

export const TranslationContext = createContext(null);

const en = {
    header: {
        youhave: 'You have',
        taskleft: 'tasks left',
        notfinishonly: 'Not Finished Only'
    },
    todolist: {
        deadline: 'Deadline',
        day: 'Days'
    },
    enterTask: 'Enter Task',
    submit: 'Submit',
    footer: {
        makeby: 'Make by',
        availabel: 'Availabel on'
    }
}

const vi = {
    header: {
        youhave: 'Bạn còn',
        taskleft: 'nhiệm vụ nữa',
        notfinishonly: 'Nhiệm vụ chưa hoàn thành'
    },
    todolist: {
        deadline: 'Còn',
        day: 'ngày'
    },
    enterTask: 'Nhập nhiệm vụ',
    submit: 'Gửi',
    footer: {
        makeby: 'Làm bởi',
        availabel: 'Đổi ngôn ngữ'
    }
};

export const dictionary = {
    en,
    vi,
};

export const TranslationProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState("en");

    return (
        <TranslationContext.Provider
            value={{ currentLanguage, setCurrentLanguage }}
        >
            {children}
        </TranslationContext.Provider>
    );
};

export function useTranslation() {
    const { currentLanguage, setCurrentLanguage } =
        useContext(TranslationContext);

    const translate = (key) => {
        if (!dictionary[currentLanguage]) {
            return `[${key}]`;
        }

        const word = key
            .split(".")
            .reduce(
                (previous, current) => previous[current],
                dictionary[currentLanguage]
            );

        if (word) {
            return word;
        }
        return `[${key}]`;
    };

    return {
        translate,
        currentLanguage,
        setCurrentLanguage,
    };
}