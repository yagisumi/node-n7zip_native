#include "common.h"

#ifdef DEBUG
static Napi::Value
trace(const Napi::CallbackInfo& info)
{
  auto str = info[0].ToString();
  TRACE(str.Utf8Value().c_str());
  return info.Env().Undefined();
}
#endif

Napi::Object
Init(Napi::Env env, Napi::Object exports)
{
  TRACE("Init");
#ifdef DEBUG
  exports.Set("DEBUG", Napi::Boolean::New(env, true));
  exports.Set("TRACE", Napi::Function::New(env, trace));
#else
  exports.Set("DEBUG", Napi::Boolean::New(env, false));
#endif
  exports.Set("ARCH", Napi::Number::New(env, sizeof(void*) * 8));

  return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)
