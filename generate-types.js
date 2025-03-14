import {generateApi} from 'swagger-typescript-api';
import path from 'node:path';

const PATH = path.resolve(process.cwd(), './src/types/domain');
const URL = 'https://raw.githubusercontent.com/mksotto/nhl-stats-api/refs/heads/main/openapi.yaml';

void generateApi({
    name: 'nhl-stats',
    url: URL,
    output: PATH,
    generateClient: false,
    generateUnionEnums: true,
    primitiveTypeConstructs: (struct) => ({
        string: {
            "date": "Date",
            "date-time": "Date",
        }
    })
});