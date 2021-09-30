export default function Detail({testProp, children, helloAlert}) {
    return (
        <div>
            Hello from Detail {testProp}
            {children}
            <button type="button" onClick={() => helloAlert("shubh")}>Click me</button>
        </div>
    )
}