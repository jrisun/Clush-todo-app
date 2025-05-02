const Header = () => {
    const now = new Date();

    const month = now.getMonth() + 1;
    const day = now.getDate();
    const weekday = new Intl.DateTimeFormat('ko-KR', {weekday: 'long'}).format(now);

    return (
        <header className="header">
            <div className="container">
                <div className="title">
                    <h1>할 일 목록</h1>
                    {/* <div className="util">
                        <span className="material-symbols-outlined">segment</span>
                    </div> */}
                </div>
                <div className="date">
                    {month}월 {day}일<i className="bi bi-dot"></i>{weekday}
                </div>
            </div>
        </header>
    );
}

export default Header;