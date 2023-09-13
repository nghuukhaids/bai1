import { useTranslation } from "./TranslateContext";

const Footer = () => {
    const { translate } = useTranslation();

    const { currentLanguage, setCurrentLanguage } = useTranslation();
    const handleChange = (e) => {
        setCurrentLanguage(e.target.id)
    }
    return (
        <div>
            <h3>{translate('footer.makeby')} MindX 🔥</h3>
            <div>
                <span>{translate('footer.availabel')}</span>
                <span id='vi' onClick={handleChange} className="languague-picker">🇻🇳</span>
                <span id='en' onClick={handleChange} className="languague-picker selected">🇺🇸</span>
            </div>
        </div>
    );
};

export default Footer;
