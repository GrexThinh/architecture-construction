import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="mb-4 text-muted-foreground">
        Có vẻ như trang này chưa được tạo... có thể AI đang nghỉ uống cà phê ☕
      </p>
      <Link to="/" className="underline text-primary">
        Xây dựng điều gì đó mới →
      </Link>
    </div>
  );
}
