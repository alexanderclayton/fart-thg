//import//
import BackAfter4416 from "../assets/4416 Back After.jpg";
import BackBefore4416 from "../assets/4416 Back Before.jpg";
import FrontAfter4416 from "../assets/4416 Front After.jpg";
import FrontBefore4416 from "../assets/4416 Front Before.jpg";
import LeftAfter4416 from "../assets/4416 Left After.jpg";
import LeftBefore4416 from "../assets/4416 Left Before.jpg";
import PorchAfter4416 from "../assets/4416 Porch After.jpg";
import PorchBefore4416 from "../assets/4416 Porch Before.jpg";
import FrontAfter11019 from "../assets/11019 Front After.jpg";
import FrontBefore11019 from "../assets/11019 Front Before.jpg";
import Garage3After from "../assets/16304 Garage 3.jpg";
import Garage3Before from "../assets/16304 Garage Before 3.jpg";
import Garage2After from "../assets/16304 Garage After 2.jpg";
import Garage2Before from "../assets/16304 Garage Before 2.jpg";
import Garage1After from "../assets/16304 Garage After.jpg";
import Garage1Before from "../assets/16304 Garage Before.jpg";
import FrontAfter19724 from '../assets/19724 Front After.jpg'
import FrontBefore19724 from '../assets/19724 Front Before.jpg'
import DeckAfter from '../assets/Deck Right After 2.jpg'
import DeckBefore from '../assets/Deck Right Before.jpg'
import GCMikeFrontAfter from '../assets/GC Mike Front After.jpg'
import GCMikeFrontBefore from '../assets/GC Mike Front Before.jpg'
import GCMikeBackAfter from '../assets/GC Mike Back Right After.jpg'
import GCMikeBackBefore from '../assets/GC Mike Back Right Before.jpg'
import GCMikeLeftAfter from '../assets/GC Mike Left After.jpg'
import GCMikeLeftBefore from '../assets/GC Mike Left Before.jpg'
import FrontAfter1410 from '../assets/IMG_4796.jpg'
import FrontBefore1410 from '../assets/IMG_3532.jpg'
import FrontAfter14128 from '../assets/Mike Front After.jpg'
import FrontBefore14128 from '../assets/Mike Before.jpg'
import BackAfter14128 from '../assets/Mike Back Left After.jpg'
import BackBefore14128 from '../assets/Mike Left Before.jpg'
import FrontAfterTimmy from '../assets/Tim Front Left.jpg'
import FrontBeforeTimmy from '../assets/Tim Front Before.jpg'

export interface IGalleryCard {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export const GalleryCard: IGalleryCard[] = [
  {
    beforeImage: FrontBefore4416,
    afterImage: FrontAfter4416,
    alt: "4416 front",
  },
  {
    beforeImage: BackBefore4416,
    afterImage: BackAfter4416,
    alt: "4416 back",
  },
  {
    beforeImage: LeftBefore4416,
    afterImage: LeftAfter4416,
    alt: "4416 left",
  },
  {
    beforeImage: PorchBefore4416,
    afterImage: PorchAfter4416,
    alt: "4416 porch",
  },
  {
    beforeImage: FrontBefore11019,
    afterImage: FrontAfter11019,
    alt: "11019 front",
  },
  {
    beforeImage: Garage3Before,
    afterImage: Garage3After,
    alt: "16304 garage straight",
  },
  {
    beforeImage: Garage2Before,
    afterImage: Garage2After,
    alt: "16304 garage right",
  },
  {
    beforeImage: Garage1Before,
    afterImage: Garage1After,
    alt: "16304 garage right",
  },
  {
    beforeImage: FrontBefore19724,
    afterImage: FrontAfter19724,
    alt: "19724 front",
  },
  {
    beforeImage: DeckBefore,
    afterImage: DeckAfter,
    alt: "deck",
  },
  {
    beforeImage: GCMikeFrontBefore,
    afterImage: GCMikeFrontAfter,
    alt: "GC Mike front",
  },
  {
    beforeImage: GCMikeBackBefore,
    afterImage: GCMikeBackAfter,
    alt: "GC Mike back",
  },
  {
    beforeImage: GCMikeLeftBefore,
    afterImage: GCMikeLeftAfter,
    alt: "GC Mike left",
  },
  {
    beforeImage: FrontBefore1410,
    afterImage: FrontAfter1410,
    alt: "1410 front",
  },
  {
    beforeImage: FrontBefore14128,
    afterImage: FrontAfter14128,
    alt: "14128 front",
  },
  {
    beforeImage: BackBefore14128,
    afterImage: BackAfter14128,
    alt: "14128 back",
  },
  {
    beforeImage: FrontBeforeTimmy,
    afterImage: FrontAfterTimmy,
    alt: "Timmy's CoSp house",
  },
];
