#pragma once

#ifdef _WIN32
  #define _WINSOCKAPI_
  #define NOMINMAX
#else
  #include <include_windows/windows.h>
  #include <myWindows/StdAfx.h>
#endif

#include <Common/MyWindows.h>
#include <Common/MyLinux.h>

#include <7zip/Archive/IArchive.h>
#include <7zip/IStream.h>
#include <7zip/ICoder.h>
#include <7zip/IPassword.h>
#include <7zip/Common/MethodId.h>
#include <Common/MyString.h>
#include <Common/UTFConvert.h>
#include <Windows/PropVariant.h>

#include <memory>
#include <mutex>
#include <atomic>
#include <thread>
#include <utility>
#include <set>
#include <string>
#include <cstdio>

#define NAPI_VERSION 4
#include <napi.h>

#include <n7zip/my_com.h>

// #include <Common/MyCom.h>
