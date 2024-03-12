function Clock() {
  return (
    <div>
      {/* toLocaleTimeString : 현재 시간 리턴 */}
      <h1>현재 시간은 {new Date().toLocaleTimeString()} 입니다.</h1>
    </div>
  );
}

export default Clock;
