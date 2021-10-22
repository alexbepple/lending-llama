import {SplitFactory} from "@splitsoftware/splitio";

const features = {
  first: "my-first-split"
}

const factory = SplitFactory({
  core: {
    authorizationKey: '4lpueit34kikq4uj1shd1ru5ghcnm9e0hs08',
    key: 'key'
  }
});

const client = factory.client();
client.on(client.Event.SDK_READY, function() {
  console.log('Flag value after Split SDK ready:', client.getTreatment(features.first))
});

console.log('Flag value on app load:', client.getTreatment(features.first))
