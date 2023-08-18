const Visual = () =>{
	return(
		<div className="sec_visual">
				<div className="visual">
					<div className="visual_item left">
						<h2>
						가장 쉬운 무료 라이브 스트리밍
						</h2>
						<p>
						모비즌 스튜디오로 프로그램 다운로드 설치 없이 유튜브, 트위치 또는 주요 방송 플랫폼으로 빠르게 방송할 수 있습니다.
						무료 라이브 지금 시작하세요!
						</p>
						<a href="#">무료 시작하기</a>
						<span>*결제정보 없이 사용할 수 있는 무료 요금제</span>
					</div>
					<div className="visual_item right">
              			  <video autoPlay loop muted playsInline width="100%">
							<source src="./img/mov_home_top.mp4"/>
						  </video>
					</div>
				</div>
			</div>
	);
}

export default Visual;