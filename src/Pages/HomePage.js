import Visual from "../components/Visual";
import List from "../components/List";
import Footer from "../components/Footer";

const HomePage = () =>{

	const data = [
		{
			id:"./img/mov_home_scene01.mp4",
			title:"모비즌 Full HD(1080p) 라이브 스트리밍",
			cont:"Mobizen 무료 요금제에서 Full HD(1080p)로 라이브 컨텐츠를 스트리밍하세요."
		},
		{
			id:"./img/mov_home_scene02.mp4",
			title:"방송에 사용할 나만의 브랜드를 만들어 보세요.",
			cont:"나만의 개성있는 브랜드 로고, 배경 이미지, 제목, 배너를 저장해 두고 손쉽게 사용해보세요."
		},
		{
			id:"./img/mov_home_scene03.mp4",
			title:"라이브 방송을 녹화해 보세요.",
			cont:"클릭 한 번으로 녹화를 시작하고, 녹화된 비디오를 당신의 주요 플랫폼 채널에 업로드하세요."
		},
		{
			id:"./img/mov_home_scene04.mp4",
			title:"경쾌한 배경음악과 함께 라이브 방송을 하세요.",
			cont:"사전 제공된 로열티 프리 음악을 재생하고 리듬감 있는 방송을 만듭니다."
		},
		{
			id:"./img/mov_home_scene05.mp4",
			title:"시청자의 눈이 즐거운 방송을 만들어보세요.",
			cont:"다양한 애니메이션 효과를 활용해 시청자의 방송 몰입도를 높일 수 있습니다."
		},
		{
			id:"./img/mov_home_scene06.mp4",
			title:"30개 이상의 무료 효과음",
			cont:"다양한 코믹 사운드와 이벤트 사운드로 라이브 방송에 대한 관심을 높여보세요."
		},
		{
			id:"./img/mov_home_scene07.mp4",
			title:"가장 인기 있는50+ 무료 씬 템플릿",
			cont:"다양한 방송 테마에 응용 가능한 시즌별, 카테고리별 템플릿을 제공하여, 빠르고 쉽게 방송 씬을 구성할 수 있습니다."
		},
		{
			id:"./img/mov_home_scene08.mp4",
			title:"손쉬운 씬 기능 사용",
			cont:"대시보드에서 쉽게 씬 모음을 재사용 해보세요! 자유롭게 씬을 추가하고 편집할 수 있습니다."
		},
		{
			id:"./img/mov_home_scene09.mp4",
			title:"더 많은 소스 스트림과 함께 방송하기",
			cont:"카메라, 모바일 카메라, 화면 공유, 비디오 및 오디오 스트림을 추가하여, 생동감 넘치는 방송을 만듭니다."
		},
		{
			id:"./img/mov_home_scene10.mp4",
			title:"24시간 무제한 라이브 방송",
			cont:"무료 요금제만으로도 24시간 연속 방송을 할 수 있습니다."
		},
		{
			id:"./img/mov_home_scene09.mp4",
			title:"30개 이상의 무료 효과음",
			cont:"다양한 코믹 사운드와 이벤트 사운드로 라이브 방송에 대한 관심을 높여보세요."
		}
	]

	return(
		<>
		<Visual/>
		{
			data.map((data)=>{
				return <List id={data.id} title={data.title} cont={data.cont} key={data} />
		})
		}
		<Footer/>
		</>
	);
}

export default HomePage;