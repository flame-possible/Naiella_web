import section5_1 from '../assets/section_5_1.png'
import section5_2 from '../assets/section_5_2.png'

export default function Section5() {
  return (
    <section className="w-full">
      <img src={section5_1} alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
      <img src={section5_2} alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
    </section>
  )
}
