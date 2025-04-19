const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="title">
                    <h1>할 일 목록</h1>
                    <div className="util">
                        <span className="material-symbols-outlined">segment</span>
                    </div>
                </div>
                <div className="date">
                    4월 19일<i class="bi bi-dot"></i>토요일
                </div>
            </div>
        </header>
    );
}

export default Header;