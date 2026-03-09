import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// ==============================================
// 1. EXISTING LANGUAGES (Ngôn ngữ cũ của bạn)
// ==============================================
import be from '../../public/locales/be/translation.json';
import bz from '../../public/locales/bz/translation.json';
import ca from '../../public/locales/ca/translation.json';
import cz from '../../public/locales/cz/translation.json';
import de from '../../public/locales/de/translation.json';
import en from '../../public/locales/en/translation.json';
import fr from '../../public/locales/fr/translation.json';
import ind from '../../public/locales/in/translation.json'; // Note: Variable is 'ind', key is 'in'
import it from '../../public/locales/it/translation.json';
import pk from '../../public/locales/pk/translation.json';
import us from '../../public/locales/us/translation.json';
import vn from '../../public/locales/vn/translation.json';
import jp from '../../public/locales/jp/translation.json';
import th from '../../public/locales/th/translation.json';
import tw from '../../public/locales/tw/translation.json';
import hk from '../../public/locales/hk/translation.json';
import ph from '../../public/locales/ph/translation.json';

// ==============================================
// 2. NEW LANGUAGES ADDED (Phần thêm mới)
// ==============================================
import bd from '../../public/locales/bd/translation.json'; // Bangladesh 
import es from '../../public/locales/es/translation.json'; // Tây Ban Nha
import pt from '../../public/locales/pt/translation.json'; // Bồ Đào Nha
import ru from '../../public/locales/ru/translation.json'; // Nga
import cn from '../../public/locales/cn/translation.json'; // Trung Quốc đại lục
import kr from '../../public/locales/kr/translation.json'; // Hàn Quốc
import ar from '../../public/locales/ar/translation.json'; // Ả Rập
import tr from '../../public/locales/tr/translation.json'; // Thổ Nhĩ Kỳ
import nl from '../../public/locales/nl/translation.json'; // Hà Lan
import pl from '../../public/locales/pl/translation.json'; // Ba Lan
import sv from '../../public/locales/sv/translation.json'; // Thụy Điển
import dk from '../../public/locales/dk/translation.json'; // Đan Mạch
import no from '../../public/locales/no/translation.json'; // Na Uy
import fi from '../../public/locales/fi/translation.json'; // Phần Lan
import gr from '../../public/locales/gr/translation.json'; // Hy Lạp
import hu from '../../public/locales/hu/translation.json'; // Hungary
import ro from '../../public/locales/ro/translation.json'; // Romania
import my from '../../public/locales/my/translation.json'; // Malaysia
import id from '../../public/locales/id/translation.json'; // Indonesia
import ua from '../../public/locales/ua/translation.json'; // Ukraine

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            // --- OLD ---
            be: { translation: be },
            bz: { translation: bz },
            ca: { translation: ca },
            cz: { translation: cz },
            de: { translation: de },
            en: { translation: en },
            fr: { translation: fr },
            in: { translation: ind },
            it: { translation: it },
            pk: { translation: pk },
            us: { translation: us },
            vn: { translation: vn },
            jp: { translation: jp },
            th: { translation: th },
            tw: { translation: tw },
            hk: { translation: hk },
            ph: { translation: ph },

            // --- NEW (THÊM MỚI) ---
            bd: { translation: bd }, // Bangladesh
            es: { translation: es },
            pt: { translation: pt },
            ru: { translation: ru },
            cn: { translation: cn },
            kr: { translation: kr },
            ar: { translation: ar },
            tr: { translation: tr },
            nl: { translation: nl },
            pl: { translation: pl },
            sv: { translation: sv },
            dk: { translation: dk },
            no: { translation: no },
            fi: { translation: fi },
            gr: { translation: gr },
            hu: { translation: hu },
            ro: { translation: ro },
            my: { translation: my },
            id: { translation: id },
            ua: { translation: ua },
        },
        fallbackLng: 'en',
        supportedLngs: [
            // --- OLD ---
            'be', 'bz', 'ca', 'cz', 'de', 'en', 'fr', 'in', 'it', 'pk', 'us', 'vn', 'jp', 'th', 'tw', 'hk', 'ph',
            // --- NEW (THÊM MỚI) ---
            'bd', 'es', 'pt', 'ru', 'cn', 'kr', 'ar', 'tr', 'nl', 'pl', 'sv', 'dk', 'no', 'fi', 'gr', 'hu', 'ro', 'my', 'id', 'ua'
        ],
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;