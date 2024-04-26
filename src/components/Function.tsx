
export default function Function() {
    return (
        <div className="text-gray-50">
          <div className="w-full border-b-2 border-slate-50 h-12">
            <div className="w-32 p-2 text-lg border-r-2">
              {"promposal.py"}
            </div>
          </div>
          <div className="text-xl font-medium font-mono p-8">
            <text>import User, create_buttons from utils</text>
            <br />
            <text>import celebrate from yayyy</text>
            <br />
            <br />
            <text>user = User("Jess")</text>
            <br />
            <br />
            <text>def prompose():</text>
            <br />
            <text className="ml-8">print("Will you go to prom with me?")</text>
            <br />
            <text className="ml-8">create_buttons()</text>
            <br />
            <text className="ml-8">if user.clicks_yes():</text>
            <br />
            <text className="ml-16">return celebrate()</text>
            <br />
            <text className="ml-8">else:</text>
            <br />
            <text className="ml-16">print(":(")</text>
            <br />
            <br />
            <text>prompose()</text>
          </div>
        </div>
      );
}