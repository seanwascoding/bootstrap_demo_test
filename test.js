function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}

// 將 MyApp 組件渲染到 root 元素中

export default MyApp;