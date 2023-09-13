import { useEffect, useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { useTranslation } from "./TranslateContext";

const Header = ({ list, setList, init }) => {
    const { translate } = useTranslation();

    const [count, setCount] = useState(0)
    const [listFirst, setListFirst] = useState([])
    const [state, setState] = useState(false)
    const countTask = () => {
        let arr = list.filter(e => e.state === false)
        console.log(arr, 'arr')
        if (arr !== undefined) {
            setCount(arr.length)
        }

    }
    useEffect(() => {
        countTask()
    })
    const showOnlyNotFinishedTask = () => {

        if (!state) {
            setState(true)
            const newArr = list.filter(e => e.state === false)
            setListFirst(list)
            setList(newArr)

        } else {

            setState(false)
            setList(listFirst)
            console.log(init, 'init')
        }

    }

    return <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
        <div className="header">{translate("header.youhave")} {count} {translate("header.taskleft")}!</div>
        <div style={{ display: 'flex', gap: '10px' }}>
            {state ? (<FaRegCheckCircle onClick={showOnlyNotFinishedTask} color="#9a9a9a" className="item-done-button" />
            ) : (<FaRegCircle onClick={showOnlyNotFinishedTask} className="item-done-button" color="#9a9a9a" />
            )}

            <div style={{ display: 'flex', alignItems: 'center' }}>{translate('header.notfinishonly')}</div>
        </div>

    </div>
};

export default Header;
