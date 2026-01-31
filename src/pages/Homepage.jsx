function Homepage() {
    return (
        <div style={{ display: "flex", height: "100vh", width: "100%", margin: 0, padding: 0 }}>
            
            <div style={{ flex: "0 0 65%", background: "#181818ff", padding: "2rem", overflowY: "auto" ,borderRight: "1px solid #ddd" , }}>
                <h2>Main Content</h2>
                
            </div>

            
            <div style={{ flex: "0 0 35%", background: "#0b0b0bff", padding: "2rem", overflowY: "auto", borderLeft: "1px solid #ddd" }}>
                <h2>Secondary Content</h2>
                
            </div>
        </div>
    )
}

export default Homepage;