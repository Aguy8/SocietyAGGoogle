/* Inline SVG community scene illustrations — replaces balloon decorations.
   scene prop: 'community' | 'concert' | 'charity' | 'party' | 'conversation' | 'volunteer' | 'networking'
   size: pixel width (height is proportional, viewBox 280×200)
*/
export default function CommunityIllustration({ scene = 'community', size = 200, style = {} }) {
  const base = {
    viewBox: '0 0 280 200',
    width: size,
    style: { display: 'block' },
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
  }

  const Community = (
    <svg {...base}>
      {/* confetti */}
      <circle cx="28" cy="28" r="5" fill="#FFD700" />
      <rect x="50" y="12" width="7" height="13" rx="3" fill="#C23B5A" transform="rotate(22,53,18)" />
      <circle cx="242" cy="24" r="4" fill='var(--cobalt)' />
      <rect x="218" y="10" width="6" height="11" rx="3" fill='var(--terre)' transform="rotate(-15,221,15)" />
      <circle cx="140" cy="10" r="5" fill='var(--acacia)' />
      <rect x="152" y="28" width="5" height="9" rx="2" fill="#5C2E91" transform="rotate(30,154,32)" />

      {/* person 1 — blue, left */}
      <circle cx="72" cy="72" r="22" fill='var(--cobalt)' />
      <ellipse cx="72" cy="114" rx="18" ry="25" fill='var(--cobalt)' />
      <path d="M62 100 Q40 80 22 58" stroke='var(--cobalt)' strokeWidth="10" strokeLinecap="round" />
      <path d="M82 105 Q100 98 114 95" stroke='var(--cobalt)' strokeWidth="10" strokeLinecap="round" />
      <path d="M64 138 Q61 162 59 185" stroke='var(--cobalt)' strokeWidth="9" strokeLinecap="round" />
      <path d="M80 138 Q82 162 84 185" stroke='var(--cobalt)' strokeWidth="9" strokeLinecap="round" />
      <circle cx="65" cy="68" r="3" fill="white" />
      <circle cx="79" cy="68" r="3" fill="white" />

      {/* person 2 — gold, centre */}
      <circle cx="140" cy="62" r="24" fill='var(--terre)' />
      <ellipse cx="140" cy="107" rx="20" ry="27" fill="#E8C870" />
      <path d="M128 92 Q100 77 80 67" stroke='var(--terre)' strokeWidth="10" strokeLinecap="round" />
      <path d="M152 92 Q180 77 200 67" stroke='var(--terre)' strokeWidth="10" strokeLinecap="round" />
      <path d="M132 133 Q129 158 127 185" stroke='var(--terre)' strokeWidth="9" strokeLinecap="round" />
      <path d="M148 133 Q151 158 153 185" stroke='var(--terre)' strokeWidth="9" strokeLinecap="round" />
      <circle cx="133" cy="58" r="3" fill="white" />
      <circle cx="147" cy="58" r="3" fill="white" />

      {/* person 3 — rose, right */}
      <circle cx="208" cy="75" r="21" fill="#C23B5A" />
      <ellipse cx="208" cy="115" rx="17" ry="24" fill="#E85470" />
      <path d="M198 103 Q177 96 165 95" stroke="#C23B5A" strokeWidth="10" strokeLinecap="round" />
      <path d="M218 100 Q238 82 255 64" stroke="#C23B5A" strokeWidth="10" strokeLinecap="round" />
      <path d="M200 137 Q197 162 195 185" stroke="#C23B5A" strokeWidth="9" strokeLinecap="round" />
      <path d="M216 137 Q218 162 220 185" stroke="#C23B5A" strokeWidth="9" strokeLinecap="round" />
      <circle cx="202" cy="71" r="3" fill="white" />
      <circle cx="214" cy="71" r="3" fill="white" />
    </svg>
  )

  const Concert = (
    <svg {...base}>
      {/* music notes */}
      <text x="26" y="52" fontSize="26" fill='var(--cobalt)' opacity="0.65" fontFamily="serif">♪</text>
      <text x="228" y="42" fontSize="22" fill='var(--terre)' opacity="0.65" fontFamily="serif">♫</text>
      <text x="128" y="18" fontSize="18" fill="#C23B5A" opacity="0.6" fontFamily="serif">♪</text>
      {/* stage glow */}
      <ellipse cx="140" cy="188" rx="118" ry="14" fill='var(--terre)' opacity="0.14" />

      {/* person 1 — blue, arms high */}
      <circle cx="72" cy="80" r="22" fill='var(--cobalt)' />
      <ellipse cx="72" cy="121" rx="18" ry="24" fill='var(--cobalt)' />
      <path d="M62 108 Q38 80 22 54" stroke='var(--cobalt)' strokeWidth="10" strokeLinecap="round" />
      <path d="M82 107 Q100 88 112 70" stroke='var(--cobalt)' strokeWidth="10" strokeLinecap="round" />
      <path d="M64 143 Q62 166 60 185" stroke='var(--cobalt)' strokeWidth="9" strokeLinecap="round" />
      <path d="M80 143 Q82 166 84 185" stroke='var(--cobalt)' strokeWidth="9" strokeLinecap="round" />
      <circle cx="65" cy="76" r="3" fill="white" />
      <circle cx="79" cy="76" r="3" fill="white" />

      {/* person 2 — gold, arms highest */}
      <circle cx="140" cy="68" r="24" fill='var(--terre)' />
      <ellipse cx="140" cy="111" rx="20" ry="27" fill="#E8C870" />
      <path d="M128 95 Q105 68 88 44" stroke='var(--terre)' strokeWidth="10" strokeLinecap="round" />
      <path d="M152 95 Q175 68 192 44" stroke='var(--terre)' strokeWidth="10" strokeLinecap="round" />
      <path d="M132 137 Q130 161 128 185" stroke='var(--terre)' strokeWidth="9" strokeLinecap="round" />
      <path d="M148 137 Q150 161 152 185" stroke='var(--terre)' strokeWidth="9" strokeLinecap="round" />
      <circle cx="133" cy="64" r="3" fill="white" />
      <circle cx="147" cy="64" r="3" fill="white" />

      {/* person 3 — purple, arms up */}
      <circle cx="208" cy="80" r="21" fill="#5C2E91" />
      <ellipse cx="208" cy="120" rx="17" ry="24" fill="#7B4BB8" />
      <path d="M198 107 Q178 82 162 57" stroke="#5C2E91" strokeWidth="10" strokeLinecap="round" />
      <path d="M218 105 Q238 82 254 59" stroke="#5C2E91" strokeWidth="10" strokeLinecap="round" />
      <path d="M200 141 Q198 164 196 185" stroke="#5C2E91" strokeWidth="9" strokeLinecap="round" />
      <path d="M216 141 Q218 164 220 185" stroke="#5C2E91" strokeWidth="9" strokeLinecap="round" />
      <circle cx="202" cy="76" r="3" fill="white" />
      <circle cx="214" cy="76" r="3" fill="white" />
    </svg>
  )

  const Charity = (
    <svg {...base}>
      {/* large heart */}
      <path d="M140 115 C130 105 108 92 108 73 C108 61 116 53 126 53 C133 53 140 60 140 60 C140 60 147 53 154 53 C164 53 172 61 172 73 C172 92 150 105 140 115Z" fill="#C23B5A" opacity="0.88" />

      {/* person 1 — blue, offering */}
      <circle cx="68" cy="82" r="22" fill='var(--cobalt)' />
      <ellipse cx="68" cy="122" rx="18" ry="24" fill='var(--cobalt)' />
      <path d="M78 110 Q105 102 120 98" stroke='var(--cobalt)' strokeWidth="10" strokeLinecap="round" />
      <path d="M58 110 Q40 120 26 128" stroke='var(--cobalt)' strokeWidth="10" strokeLinecap="round" />
      <path d="M60 144 Q58 167 56 185" stroke='var(--cobalt)' strokeWidth="9" strokeLinecap="round" />
      <path d="M76 144 Q78 167 80 185" stroke='var(--cobalt)' strokeWidth="9" strokeLinecap="round" />
      <circle cx="61" cy="78" r="3" fill="white" />
      <circle cx="75" cy="78" r="3" fill="white" />

      {/* person 2 — green, receiving */}
      <circle cx="212" cy="82" r="22" fill='var(--acacia)' />
      <ellipse cx="212" cy="122" rx="18" ry="24" fill="#22A060" />
      <path d="M202 110 Q175 102 160 98" stroke='var(--acacia)' strokeWidth="10" strokeLinecap="round" />
      <path d="M222 110 Q240 120 254 128" stroke='var(--acacia)' strokeWidth="10" strokeLinecap="round" />
      <path d="M204 144 Q202 167 200 185" stroke='var(--acacia)' strokeWidth="9" strokeLinecap="round" />
      <path d="M220 144 Q222 167 224 185" stroke='var(--acacia)' strokeWidth="9" strokeLinecap="round" />
      <circle cx="205" cy="78" r="3" fill="white" />
      <circle cx="219" cy="78" r="3" fill="white" />

      {/* small hearts floating */}
      <circle cx="46" cy="46" r="7" fill="#C23B5A" opacity="0.28" />
      <circle cx="234" cy="44" r="5" fill="#C23B5A" opacity="0.22" />
      <circle cx="140" cy="22" r="5" fill="#C23B5A" opacity="0.18" />
    </svg>
  )

  const Party = (
    <svg {...base}>
      {/* confetti */}
      <circle cx="18" cy="18" r="5" fill="#FFD700" />
      <rect x="44" y="8" width="8" height="14" rx="3" fill="#C23B5A" transform="rotate(25,48,15)" />
      <circle cx="88" cy="11" r="4" fill='var(--cobalt)' />
      <rect x="148" y="7" width="7" height="12" rx="3" fill='var(--acacia)' transform="rotate(-20,151,13)" />
      <circle cx="200" cy="14" r="5" fill='var(--terre)' />
      <rect x="242" y="24" width="6" height="10" rx="3" fill="#5C2E91" transform="rotate(16,245,29)" />
      <circle cx="258" cy="62" r="4" fill="#C23B5A" />
      <circle cx="14" cy="80" r="4" fill='var(--acacia)' />
      <rect x="18" y="122" width="7" height="11" rx="3" fill='var(--terre)' transform="rotate(30,21,127)" />
      <circle cx="262" cy="132" r="5" fill='var(--cobalt)' />

      {/* person 1 — blue, hat */}
      <polygon points="72,32 58,72 86,72" fill='var(--terre)' />
      <line x1="72" y1="32" x2="72" y2="22" stroke="#C23B5A" strokeWidth="3" />
      <circle cx="72" cy="22" r="5" fill="#C23B5A" />
      <circle cx="72" cy="72" r="22" fill='var(--cobalt)' />
      <ellipse cx="72" cy="114" rx="18" ry="25" fill='var(--cobalt)' />
      <path d="M62 100 Q40 78 22 54" stroke='var(--cobalt)' strokeWidth="10" strokeLinecap="round" />
      <path d="M82 100 Q100 84 110 74" stroke='var(--cobalt)' strokeWidth="10" strokeLinecap="round" />
      <path d="M64 138 Q62 162 60 185" stroke='var(--cobalt)' strokeWidth="9" strokeLinecap="round" />
      <path d="M80 138 Q82 162 84 185" stroke='var(--cobalt)' strokeWidth="9" strokeLinecap="round" />
      <circle cx="65" cy="68" r="3" fill="white" />
      <circle cx="79" cy="68" r="3" fill="white" />

      {/* person 2 — gold, centre */}
      <circle cx="140" cy="64" r="24" fill='var(--terre)' />
      <ellipse cx="140" cy="109" rx="20" ry="27" fill="#E8C870" />
      <path d="M128 94 Q108 79 90 67" stroke='var(--terre)' strokeWidth="10" strokeLinecap="round" />
      <path d="M152 94 Q172 79 190 67" stroke='var(--terre)' strokeWidth="10" strokeLinecap="round" />
      <path d="M132 135 Q130 159 128 185" stroke='var(--terre)' strokeWidth="9" strokeLinecap="round" />
      <path d="M148 135 Q150 159 152 185" stroke='var(--terre)' strokeWidth="9" strokeLinecap="round" />
      <circle cx="133" cy="60" r="3" fill="white" />
      <circle cx="147" cy="60" r="3" fill="white" />

      {/* person 3 — rose, right */}
      <circle cx="208" cy="75" r="21" fill="#C23B5A" />
      <ellipse cx="208" cy="115" rx="17" ry="24" fill="#E85470" />
      <path d="M198 103 Q180 90 168 80" stroke="#C23B5A" strokeWidth="10" strokeLinecap="round" />
      <path d="M218 100 Q238 80 254 60" stroke="#C23B5A" strokeWidth="10" strokeLinecap="round" />
      <path d="M200 137 Q198 161 196 185" stroke="#C23B5A" strokeWidth="9" strokeLinecap="round" />
      <path d="M216 137 Q218 161 220 185" stroke="#C23B5A" strokeWidth="9" strokeLinecap="round" />
      <circle cx="202" cy="71" r="3" fill="white" />
      <circle cx="214" cy="71" r="3" fill="white" />
    </svg>
  )

  const Conversation = (
    <svg {...base}>
      {/* speech bubble left */}
      <rect x="18" y="18" width="112" height="58" rx="16" fill="#E8EFFD" />
      <path d="M78 76 L68 98 L94 76" fill="#E8EFFD" />
      <line x1="36" y1="38" x2="112" y2="38" stroke='var(--cobalt)' strokeWidth="4" strokeLinecap="round" opacity="0.38" />
      <line x1="36" y1="52" x2="100" y2="52" stroke='var(--cobalt)' strokeWidth="4" strokeLinecap="round" opacity="0.38" />
      <line x1="36" y1="66" x2="88" y2="66" stroke='var(--cobalt)' strokeWidth="4" strokeLinecap="round" opacity="0.28" />

      {/* speech bubble right */}
      <rect x="150" y="28" width="112" height="54" rx="16" fill="#FEF3C7" />
      <path d="M192 82 L187 104 L212 82" fill="#FEF3C7" />
      <line x1="168" y1="47" x2="244" y2="47" stroke='var(--terre)' strokeWidth="4" strokeLinecap="round" opacity="0.38" />
      <line x1="168" y1="61" x2="228" y2="61" stroke='var(--terre)' strokeWidth="4" strokeLinecap="round" opacity="0.38" />
      <line x1="168" y1="73" x2="210" y2="73" stroke='var(--terre)' strokeWidth="4" strokeLinecap="round" opacity="0.28" />

      {/* person 1 — blue, left */}
      <circle cx="72" cy="132" r="22" fill='var(--cobalt)' />
      <ellipse cx="72" cy="168" rx="18" ry="20" fill='var(--cobalt)' />
      <path d="M82 156 Q106 149 118 146" stroke='var(--cobalt)' strokeWidth="10" strokeLinecap="round" />
      <path d="M62 156 Q44 163 30 169" stroke='var(--cobalt)' strokeWidth="10" strokeLinecap="round" />
      <circle cx="65" cy="128" r="3" fill="white" />
      <circle cx="79" cy="128" r="3" fill="white" />

      {/* person 2 — gold, right */}
      <circle cx="208" cy="132" r="22" fill='var(--terre)' />
      <ellipse cx="208" cy="168" rx="18" ry="20" fill="#E8C870" />
      <path d="M198 156 Q174 149 162 146" stroke='var(--terre)' strokeWidth="10" strokeLinecap="round" />
      <path d="M218 156 Q236 163 250 169" stroke='var(--terre)' strokeWidth="10" strokeLinecap="round" />
      <circle cx="201" cy="128" r="3" fill="white" />
      <circle cx="215" cy="128" r="3" fill="white" />
    </svg>
  )

  const Volunteer = (
    <svg {...base}>
      {/* tree/plant being grown */}
      <line x1="140" y1="185" x2="140" y2="122" stroke='var(--acacia)' strokeWidth="7" strokeLinecap="round" />
      <circle cx="140" cy="108" r="24" fill='var(--acacia)' opacity="0.78" />
      <circle cx="122" cy="120" r="18" fill="#22A060" opacity="0.68" />
      <circle cx="158" cy="120" r="18" fill="#22A060" opacity="0.68" />
      <circle cx="140" cy="92" r="20" fill="#34C060" opacity="0.58" />

      {/* heart above tree */}
      <path d="M140 55 C140 55 122 42 122 28 C122 18 129 12 136 12 C140 12 140 16 140 16 C140 16 140 12 144 12 C151 12 158 18 158 28 C158 42 140 55 140 55Z" fill="#C23B5A" opacity="0.7" />

      {/* person 1 — blue, left */}
      <circle cx="68" cy="90" r="22" fill='var(--cobalt)' />
      <ellipse cx="68" cy="130" rx="18" ry="24" fill='var(--cobalt)' />
      <path d="M78 117 Q104 110 118 107" stroke='var(--cobalt)' strokeWidth="10" strokeLinecap="round" />
      <path d="M58 117 Q38 127 24 133" stroke='var(--cobalt)' strokeWidth="10" strokeLinecap="round" />
      <path d="M60 152 Q58 168 56 185" stroke='var(--cobalt)' strokeWidth="9" strokeLinecap="round" />
      <path d="M76 152 Q78 168 80 185" stroke='var(--cobalt)' strokeWidth="9" strokeLinecap="round" />
      <circle cx="61" cy="86" r="3" fill="white" />
      <circle cx="75" cy="86" r="3" fill="white" />

      {/* person 2 — rose, right */}
      <circle cx="212" cy="90" r="22" fill="#C23B5A" />
      <ellipse cx="212" cy="130" rx="18" ry="24" fill="#E85470" />
      <path d="M202 117 Q176 110 162 107" stroke="#C23B5A" strokeWidth="10" strokeLinecap="round" />
      <path d="M222 117 Q242 127 256 133" stroke="#C23B5A" strokeWidth="10" strokeLinecap="round" />
      <path d="M204 152 Q202 168 200 185" stroke="#C23B5A" strokeWidth="9" strokeLinecap="round" />
      <path d="M220 152 Q222 168 224 185" stroke="#C23B5A" strokeWidth="9" strokeLinecap="round" />
      <circle cx="205" cy="86" r="3" fill="white" />
      <circle cx="219" cy="86" r="3" fill="white" />
    </svg>
  )

  const Networking = (
    <svg {...base}>
      {/* connection lines */}
      <line x1="72" y1="100" x2="208" y2="100" stroke='var(--cobalt)' strokeWidth="3" strokeDasharray="6,4" opacity="0.35" />
      <line x1="72" y1="100" x2="140" y2="162" stroke='var(--terre)' strokeWidth="3" strokeDasharray="6,4" opacity="0.35" />
      <line x1="208" y1="100" x2="140" y2="162" stroke='var(--acacia)' strokeWidth="3" strokeDasharray="6,4" opacity="0.35" />
      {/* nodes */}
      <circle cx="72" cy="100" r="9" fill='var(--cobalt)' opacity="0.22" />
      <circle cx="208" cy="100" r="9" fill='var(--terre)' opacity="0.22" />
      <circle cx="140" cy="162" r="9" fill='var(--acacia)' opacity="0.22" />

      {/* person 1 — blue, top-left */}
      <circle cx="72" cy="62" r="22" fill='var(--cobalt)' />
      <ellipse cx="72" cy="102" rx="18" ry="22" fill='var(--cobalt)' />
      <path d="M62 90 Q42 80 26 74" stroke='var(--cobalt)' strokeWidth="9" strokeLinecap="round" />
      <path d="M82 90 Q100 84 114 88" stroke='var(--cobalt)' strokeWidth="9" strokeLinecap="round" />
      <circle cx="65" cy="58" r="3" fill="white" />
      <circle cx="79" cy="58" r="3" fill="white" />

      {/* person 2 — gold, top-right */}
      <circle cx="208" cy="62" r="22" fill='var(--terre)' />
      <ellipse cx="208" cy="102" rx="18" ry="22" fill="#E8C870" />
      <path d="M198 90 Q180 84 166 88" stroke='var(--terre)' strokeWidth="9" strokeLinecap="round" />
      <path d="M218 90 Q238 80 252 74" stroke='var(--terre)' strokeWidth="9" strokeLinecap="round" />
      <circle cx="201" cy="58" r="3" fill="white" />
      <circle cx="215" cy="58" r="3" fill="white" />

      {/* person 3 — green, bottom-centre */}
      <circle cx="140" cy="130" r="22" fill='var(--acacia)' />
      <ellipse cx="140" cy="168" rx="18" ry="20" fill="#22A060" />
      <path d="M130 157 Q112 168 98 174" stroke='var(--acacia)' strokeWidth="9" strokeLinecap="round" />
      <path d="M150 157 Q168 168 182 174" stroke='var(--acacia)' strokeWidth="9" strokeLinecap="round" />
      <circle cx="133" cy="126" r="3" fill="white" />
      <circle cx="147" cy="126" r="3" fill="white" />

      {/* floating dots */}
      <circle cx="28" cy="28" r="5" fill='var(--cobalt)' opacity="0.38" />
      <circle cx="252" cy="26" r="4" fill='var(--terre)' opacity="0.38" />
      <circle cx="140" cy="18" r="5" fill='var(--acacia)' opacity="0.32" />
    </svg>
  )

  const scenes = {
    community: Community,
    concert: Concert,
    charity: Charity,
    party: Party,
    conversation: Conversation,
    volunteer: Volunteer,
    networking: Networking,
  }

  return (
    <div style={{ width: size, flexShrink: 0, ...style }} aria-hidden="true">
      {scenes[scene] ?? Community}
    </div>
  )
}
