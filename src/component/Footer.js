function Footer() {
    let year = new Date().getFullYear()
    return (
        <footer className="bg-black text-white text-center py-3">
            Copyright &copy; {year} <a href="https://www.linkedin.com/in/fuadpro/">fuadpro</a>
        </footer>
    )
}

export default Footer