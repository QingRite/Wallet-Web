import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
function Totalbalance({text, income, spending}) {
    const totalBalanceComponent = {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        gridTemplateRows: 'auto auto auto',
        padding: '10px'
    }

    const tBTextStyle = {
        margin: '0.5em 0'
    }

    const totalBalanceTitle = {
        fontSize: '24px',
        gridColumn: '1/3'
    }

    const totalBalanceAmt = {
        fontSize: '22px',
        gridColumn: '1/3'
    }
    
    const homepgStats = {
        display: 'grid',
        gridTemplateRows: 'auto auto',
        gridTemplateColumns: '1fr 4fr',
        padding: '5px 0px 5px 0px',
        margin: '5px 0px 5px 0px'
    }

    const IoIosArrow = {
        height: '20px',
        width: '20px',
        margin: 'auto 0 auto 0',
        textAlign: 'left'
    }

    const incomeArrow = {
        color: 'green'
    }

    const spendingArrow = {
        color: 'red'
    }

    const totalBalanceSubAmt = {
        fontSize: '12px',
        textAlign: 'left'
    }

    const totalBalanceDesc = {
        fontSize: '12px',
        gridColumn: '1/3'
    }

    return (
        <div style={totalBalanceComponent}>
            <h1 style={{...totalBalanceTitle, ...tBTextStyle}} className="totalBalanceTitle">Your total balance</h1>
            <h2 style={{...totalBalanceAmt, ...tBTextStyle}} className="totalBalanceAmt">{text}</h2>
            <div style={homepgStats} className="homepgIncomeStats"> 
                <IoIosArrowRoundUp style={{...IoIosArrow, ...incomeArrow}}/>   
                <h3 style={{...totalBalanceSubAmt, ...tBTextStyle}}>{income}</h3>
                <h4 style={{...totalBalanceDesc, ...tBTextStyle}}>Today's income</h4>
            </div>
            <div style={homepgStats} className="homepgSpendingStats">
                <IoIosArrowRoundDown style={{...IoIosArrow, ...spendingArrow}}/>   
                <h3 style={{...totalBalanceSubAmt, ...tBTextStyle}}>{spending}</h3>
                <h4 style={{...totalBalanceDesc, ...tBTextStyle}}>Today's spending</h4>
            </div>
        </div>
    )
}

export default Totalbalance;