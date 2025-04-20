const Header = () => {
    const now = new Date();

    const formattedDate = new Intl.DateTimeFormat('ko-KR', {
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    }).format(now);

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
                    {formattedDate}
                </div>
            </div>
        </header>
    );
}

export default Header;